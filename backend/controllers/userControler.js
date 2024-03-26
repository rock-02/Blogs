const comment = require("../models/comment");
const post = require("../models/post");
const user = require("../models/user");
const User = require("../models/user");

exports.Signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    const token = {
      id: newUser._id,
      role: newUser.role,
      email: newUser.email,
    };

    res
      .status(201)
      .json({ message: "User created successfully", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    if (password !== existingUser.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // const token = existingUser.jwtToken();

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   sameSite: "strict",
    //   secure: true,
    //   maxAge: 5 * 1000 * 60,
    // });
    // console.log(token);

    const token = {
      id: existingUser._id,
      role: existingUser.role,
      email: existingUser.email,
    };
    res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPost = async (req, res, next) => {
  const { title, body, user, category, images } = req.body;

  console.log(req.body);
  if (!title || !body || !user || !category || !images) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log(req.body);

  try {
    const newPost = new post({
      title,
      body,
      user,
      category,
      images,
    });

    await newPost.save();

    const loggedUser = await User.findById(user);

    loggedUser.posts.push(newPost._id);

    await loggedUser.save();

    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await post
      .find()
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "name profileImage ",
        },
        select: "body user likes dislikes",
      })
      .populate("user", "name email profileImage");

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "User id is required" });
  }
  try {
    const user = await User.findById(id)
      .select("-password")
      .populate("posts", "title body category images");
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.likePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  if (!id || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const postToUpdate = await post.findById(id);

    if (postToUpdate.dislikes.includes(userId)) {
      postToUpdate.dislikes = postToUpdate.dislikes.filter((dislike) => {
        // console.log(dislike);
        // console.log(userId);
        return dislike != userId;
      });
    }

    if (postToUpdate.likes.includes(userId)) {
      console.log("unliking");

      postToUpdate.likes = postToUpdate.likes.filter((like) => {
        console.log(like);
        console.log(userId);
        return like != userId;
      });
      await postToUpdate.save();
      return res.status(200).json({ message: "Post unliked successfully" });
    }
    postToUpdate.likes.push(userId);
    await postToUpdate.save();
    res.status(200).json({ message: "Post liked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.dislikePost = async (req, res) => {
  const { id } = req.params;

  const { userId } = req.body;

  if (!id || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const postToUpdate = await post.findById(id);

    if (postToUpdate.likes.includes(userId)) {
      postToUpdate.likes = postToUpdate.likes.filter((like) => {
        console.log(like);
        console.log(userId);
        return like != userId;
      });
    }

    if (postToUpdate.dislikes.includes(userId)) {
      postToUpdate.dislikes = postToUpdate.dislikes.filter((dislike) => {
        console.log(dislike);
        console.log(userId);
        return dislike != userId;
      });
      await postToUpdate.save();
      return res.status(200).json({ message: "Post undisliked successfully" });
    }

    postToUpdate.dislikes.push(userId);
    await postToUpdate.save();
    res.status(200).json({ message: "Post disliked successfully" });
  } catch (error) {}
};

exports.commentPost = async (req, res) => {
  const { id } = req.params;

  console.log(req.body);
  const { userId, text } = req.body;

  if (!id || !userId || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const commentOne = await comment.create({
      body: text,
      user: userId,
      post: id,
    });
    const postToUpdate = await post.findById(id);
    await commentOne.save();
    postToUpdate.comments.push(commentOne._id);
    await postToUpdate.save();
    res.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.commentLike = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  if (!id || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const commentToUpdate = await comment.findById(id);
    if (commentToUpdate.dislikes.includes(userId)) {
      commentToUpdate.dislikes = commentToUpdate.dislikes.filter((dislike) => {
        return dislike != userId;
      });
    }

    if (commentToUpdate.likes.includes(userId)) {
      commentToUpdate.likes = commentToUpdate.likes.filter((like) => {
        return like != userId;
      });

      await commentToUpdate.save();
      return res.status(200).json({ message: "Comment unliked successfully" });
    }

    commentToUpdate.likes.push(userId);

    await commentToUpdate.save();

    res.status(200).json({ message: "Comment liked successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.commentDislike = async (req, res) => {
  const { id } = req.params;

  const { userId } = req.body;

  if (!id || !userId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const commentToUpdate = await comment.findById(id);

    if (commentToUpdate.likes.includes(userId)) {
      commentToUpdate.likes = commentToUpdate.likes.filter((like) => {
        return like != userId;
      });
    }

    if (commentToUpdate.dislikes.includes(userId)) {
      commentToUpdate.dislikes = commentToUpdate.dislikes.filter((dislike) => {
        return dislike != userId;
      });

      await commentToUpdate.save();
      return res.status(200).json({ message: "Comment disliked successfully" });
    }

    commentToUpdate.dislikes.push(userId);

    await commentToUpdate.save();

    res.status(200).json({ message: "Comment disliked successfully" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getPost = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Post id is required" });
  }
  try {
    const postOne = await post
      .findById(id)
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "name profileImage",
        },
        select: "body user likes dislikes",
      })
      .populate("user", "name email profileImage");
    res.status(200).json(postOne);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.updateProfile = async (req, res) => {
  const { id } = req.params;

  console.log(req.body.email);

  // console.log(req.body);
  if (!id) {
    return res.status(400).json({ messaage: "All fields are required" });
  }

  try {
    const updatedUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    // console.log(updatedUser);

    console.log("Profile updated successfully");

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
