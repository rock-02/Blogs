import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import Profile from "./Profile";
import NewBlog from "./NewBlog";
import MyBlogs from "./MyBlogs";
import Following from "./Following";
import Followers from "./Follwers";
import Delete from "./Delete";

const Blog = () => {
  console.log("Blog component");
  const token = localStorage.getItem("token");

  console.log(JSON.parse(token));
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "profile":
        return <Profile />;
      case "new":
        return <NewBlog />;
      case "myblogs":
        return <MyBlogs />;
      case "allblogs":
        return <MyBlogs />;
      case "following":
        return <Following />;
      case "followers":
        return <Followers />;
      case "delete":
        return <Delete />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div style={{ width: "25vw" }}>
        <SideNavBar onSelectComponent={setSelectedComponent} />
      </div>
      <div style={{ width: "75vw" }}>{renderSelectedComponent()}</div>
    </div>
  );
};

export default Blog;
