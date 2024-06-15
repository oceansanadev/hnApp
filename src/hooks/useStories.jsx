import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStoryIds = async (path) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/${path}.json`
  );
  return response.data;
};

const fetchStory = async (storyId) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
  );
  return response.data;
};

export const fetchStories = async ({ pageParam = 0, storyIds }) => {
  const storyIdsToFetch = storyIds.slice(pageParam, pageParam + 20);
  const storyPromises = storyIdsToFetch.map((id) => fetchStory(id));
  const stories = await Promise.all(storyPromises);
  return { stories, nextPage: pageParam + 20 };
};

function useStories({ queryKey, path }) {
  const { data: storyIds } = useQuery({
    queryKey: [...queryKey],
    queryFn: () => fetchStoryIds(path),
    staleTime: 60000 * 60,
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
    status,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [...queryKey, storyIds],
    queryFn: ({ pageParam }) => fetchStories({ pageParam, storyIds }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.stories.length ? lastPage.nextPage : undefined,
    enabled: !!storyIds?.length,
    staleTime: 60000 * 60,
  });

  return {
    isLoading: status == "pending" || isLoading,
    isError,
    error,
    stories: data?.pages.flatMap((page) => page.stories) || [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}

export default useStories;
