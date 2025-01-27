import React from "react";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import TodoListPage from "./pages/TodoListPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/users" element={<UserListPage />} />
    <Route path="/users/:id" element={<UserDetailPage />} />
    <Route path="/posts" element={<PostListPage />} />
    <Route path="/posts/:id" element={<PostDetailPage />} />
    <Route path="/todos" element={<TodoListPage />} />
  </Routes>
);

export default AppRoutes;
