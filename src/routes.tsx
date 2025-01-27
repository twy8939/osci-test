import React from "react";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import TodoListPage from "./pages/TodoListPage";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/user" element={<UserListPage />} />
    <Route path="/user/:id" element={<UserDetailPage />} />
    <Route path="/post" element={<PostListPage />} />
    <Route path="/post/:id" element={<PostDetailPage />} />
    <Route path="/todo" element={<TodoListPage />} />
  </Routes>
);

export default AppRoutes;
