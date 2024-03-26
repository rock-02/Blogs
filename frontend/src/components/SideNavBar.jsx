import React from "react";
import { Link } from "react-router-dom";

const SideNavBar = ({ onSelectComponent }) => {
  const handleItemClick = (component) => {
    onSelectComponent(component);
  };

  return (
    <div className="sidenav">
      <button to="/profile" onClick={() => handleItemClick("profile")}>
        Edit Profile
      </button>
      <button to="/new" onClick={() => handleItemClick("new")}>
        New Blog
      </button>
      <button to="/myblogs" onClick={() => handleItemClick("myblogs")}>
        My Blogs
      </button>
      <button to="/allblogs" onClick={() => handleItemClick("allblogs")}>
        View Blogs
      </button>
      <button to="/following" onClick={() => handleItemClick("following")}>
        Following
      </button>
      <button to="/followers" onClick={() => handleItemClick("followers")}>
        Followers
      </button>
      <button to="/delete" onClick={() => handleItemClick("delete")}>
        Delete Account
      </button>
    </div>
  );
};

export default SideNavBar;
