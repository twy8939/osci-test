import React from "react";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import PostListPage from "./pages/PostListPage";
import TaskListPage from "./pages/TaskListPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/users" element={<UserListPage />} />
    <Route path="/users/:id" element={<UserDetailPage />} />
    <Route path="/posts" element={<PostListPage />} />
    <Route path="/tasks" element={<TaskListPage />} />
  </Routes>
);

export default AppRoutes;
