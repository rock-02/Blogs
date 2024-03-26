import React from "react";
import Signup from "./components/Signup";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import NewBlog from "./components/NewBlog";
import MyBlogs from "./components/MyBlogs";
import Following from "./components/Following";
import Followers from "./components/Follwers";
import Delete from "./components/Delete";
import DetailBlog from "./components/DetailBlog";

const App = () => {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<DetailBlog />} />
      </Routes>
    </div>
  );
};

export default App;
