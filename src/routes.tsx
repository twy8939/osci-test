import React from "react";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import PostListPage from "./pages/PostListPage";
import TaskListPage from "./pages/TaskListPage";
import PostDetailPage from "./pages/PostDetailPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/users" element={<UserListPage />} />
    <Route path="/users/:id" element={<UserDetailPage />} />
    <Route path="/posts" element={<PostListPage />} />
    <Route path="/posts/:id" element={<PostDetailPage />} />
    <Route path="/tasks" element={<TaskListPage />} />
  </Routes>
);

export default AppRoutes;
