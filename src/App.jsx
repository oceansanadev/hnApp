import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./features/home/pages/HomePage";
import NewStoriesPage from "./features/newStories/pages/NewStoriesPage";
import BestStoriesPage from "./features/bestStories/pages/BestStoriesPage";
import AskStoriesPage from "./features/askStories/pages/AskStoriesPage";
import ShowStoriesPage from "./features/showStories/pages/ShowStoriesPage";
import JobStoriesPage from "./features/jobStories/pages/JobStoriesPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/newStories" element={<NewStoriesPage />} />
        <Route path="/bestStories" element={<BestStoriesPage />} />
        <Route path="/askStories" element={<AskStoriesPage />} />
        <Route path="/showStories" element={<ShowStoriesPage />} />
        <Route path="/jobStories" element={<JobStoriesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
