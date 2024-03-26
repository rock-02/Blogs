import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
const DetailBlog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  });
  return (
    <div id="sp">
      <div id="sp1">
        <img src={blog?.user?.profileImage} alt="" />
        <h3>{blog?.user?.name}</h3>
        <h3>{blog.user?.email}</h3>
      </div>

      <div id="sp2">
        <h2>Name : {blog?.title}</h2>
        <h3>Category : {blog?.category}</h3>
        <img src={blog?.images} alt="" />
        <p>{blog?.body}</p>
      </div>
    </div>
  );
};

export default DetailBlog;
