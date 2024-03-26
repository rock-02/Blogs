const express = require("express");
const {
  Signup,
  Login,
  createPost,
  getPosts,
  getUser,
  likePost,
  dislikePost,
  commentPost,
  commentLike,
  commentDislike,
  getPost,
  updateProfile,
} = require("../controllers/userControler");

const router = express.Router();

router.post("/signup", Signup);

router.post("/login", Login);

router.post("/new", createPost);

router.get("/blogs", getPosts);

router.get("/user/:id", getUser);

router.put("/blogs/:id/like", likePost);

router.put("/blogs/:id/dislike", dislikePost);

router.put("/blogs/:id/comment", commentPost);

router.put("/blogs/comment/:id/like", commentLike);

router.put("/blogs/comment/:id/dislike", commentDislike);

router.get("/blogs/:id", getPost);

router.put("/user/:id", updateProfile);

module.exports = router;
