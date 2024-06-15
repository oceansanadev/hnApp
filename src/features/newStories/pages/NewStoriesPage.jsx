import ListItem from "../../../components/ListItem/ListItem";
import InfiniteScroll from "react-infinite-scroll-component";
import useStories from "../../../hooks/useStories";
import styles from "./NewStoriesPage.module.scss";
import Card from "../../../components/Card/Card";
import CenterMessage from "../../../components/CenterMessage/CenterMessage";

function NewStoriesPage() {
  const { error, fetchNextPage, hasNextPage, isError, isLoading, stories } =
    useStories({
      path: "/newstories",
      queryKey: ["/newstories"],
    });

  if (isLoading)
    return (
      <CenterMessage>
        <h1>Loading initial</h1>
      </CenterMessage>
    );

  if (isError)
    return (
      <CenterMessage>
        <h1>{error}</h1>
      </CenterMessage>
    );

  const loader = <Card>Loading...</Card>;

  const endMessage = <Card>End of list</Card>;

  return (
    <InfiniteScroll
      dataLength={stories.length}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={loader}
      endMessage={endMessage}
      className={styles.listContainer}
    >
      {stories.map((story) => (
        <ListItem key={story.id} {...story} />
      ))}
    </InfiniteScroll>
  );
}

export default NewStoriesPage;
