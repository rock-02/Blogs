import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetch = () => {
    axios
      .get("http://localhost:3000/api/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((e) => {
        console.log("Error");
        console.log(e.response.data.message);
      });
  };

  useEffect(() => {
    fetch();
  }, [blogs]);

  const handleLikes = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const userId = token.id;
    axios
      .put(`http://localhost:3000/api/blogs/${id}/like`, { userId: userId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });

    fetch();
  };

  const handleDislikes = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const userId = token.id;
    axios
      .put(`http://localhost:3000/api/blogs/${id}/dislike`, { userId: userId })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });

    fetch();
  };

  const postComment = (id, text) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const userId = token.id;

    console.log(id, text, userId);

    axios
      .put(`http://localhost:3000/api/blogs/${id}/comment`, {
        userId: userId,
        text: text,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });

    fetch();
  };

  const likeComment = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const userId = token.id;

    axios
      .put(`http://localhost:3000/api/blogs/comment/${id}/like`, {
        userId: userId,
      })
      .then((res) => {
        // alert(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });

    fetch();
  };

  const disLikeComment = (id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const userId = token.id;

    axios
      .put(`http://localhost:3000/api/blogs/comment/${id}/dislike`, {
        userId: userId,
      })
      .then((res) => {
        // alert(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });

    fetch();
  };
  return (
    <div
      className="pages"
      style={{ display: "flex", flexDirection: "column", gap: "3vw" }}
    >
      {blogs.map((blog) => {
        return (
          <Card
            key={blog._id}
            blog={blog}
            handleLikes={handleLikes}
            handleDislikes={handleDislikes}
            postComment={postComment}
            likeComment={likeComment}
            disLikeComment={disLikeComment}
            
          />
        );
      })}
    </div>
  );
};

export default MyBlogs;
