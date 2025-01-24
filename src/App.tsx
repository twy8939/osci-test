import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import PostListPage from "./pages/PostListPage";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/tasks" element={<TaskListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
