import React from "react";
import { Route, Routes } from "react-router-dom";
import UserListPage from "./pages/user/UserListPage";
import UserDetailPage from "./pages/user/UserDetailPage";
import PostListPage from "./pages/post/PostListPage";
import PostDetailPage from "./pages/post/PostDetailPage";
import TodoListPage from "./pages/todo/TodoListPage";

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
