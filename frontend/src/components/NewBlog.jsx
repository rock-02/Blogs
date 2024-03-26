import React, { useState } from "react";

import axios from "axios";
const NewBlog = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    category: "",
    images: "",
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(post);

    const token = JSON.parse(localStorage.getItem("token"));

    console.log(token);
    const postObj = { ...post, user: token.id };

    console.log(postObj);

    axios
      .post("http://localhost:3000/api/new", postObj)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };
  return (
    <div className="page">
      <div id="form">
        <h1>New Blog</h1>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={post.title}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          type="text"
          name="body"
          id="body"
          cols={30}
          value={post.body}
          placeholder="Body"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          value={post.category}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="images"
          id="images"
          value={post.images}
          placeholder="Image Url"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NewBlog;
