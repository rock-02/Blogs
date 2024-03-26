import React, { useState } from "react";
import { LiaCommentSolid } from "react-icons/lia";

import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export const Card = ({
  blog,
  handleLikes,
  handleDislikes,
  postComment,
  likeComment,
  disLikeComment,
}) => {
  const [iscomment, Setiscomment] = useState(false);
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [com, setCom] = useState(false);

  const handleComment = () => {
    Setiscomment(!iscomment);
  };
  const nextPage = () => {
    navigate(`/blog/${blog?._id}`);
  };
  return (
    <div id="post">
      <div id="upp">
        <div id="upp-1">
          <h3>{blog?.title}</h3>
          <h3>{blog?.category}</h3>
        </div>
        <div id="upp-2">
          <h3>{blog?.user?.name}</h3>
          <img src={blog?.user?.profileImage} alt="" />
        </div>
      </div>

      <div id="middle">
        <img onClick={nextPage} src={blog?.images} alt="" />
      </div>

      <div id="down">
        <div>
          <SlLike onClick={() => handleLikes(blog?._id)} />
          <h1>{blog?.likes?.length}</h1>
        </div>
        <div>
          <SlDislike onClick={() => handleDislikes(blog?._id)} />
          <h1>{blog?.dislikes?.length}</h1>
        </div>
        <LiaCommentSolid onClick={handleComment} />
        <FaTelegramPlane />
      </div>

      {iscomment && (
        <div id="comment">
          {blog?.comments?.map((comment) => {
            return (
              <div className="comm" key={comment._id}>
                <div id="comment-p1">
                  <div id="com1">
                    <img src={comment.user.profileImage} alt="" />
                  </div>
                  <div id="com2">
                    <h1>{comment?.user?.name}</h1>
                    <h1>{comment?.body}</h1>
                  </div>
                </div>
                <div id="c-like">
                  <div id="c-like1">
                    <SlLike onClick={() => likeComment(comment?._id)} />
                    <h1>{comment?.likes?.length}</h1>
                  </div>
                  <div id="c-like2">
                    <SlDislike
                      onClick={() => {
                        disLikeComment(comment?._id);
                      }}
                    />
                    <h1>{comment?.dislikes?.length}</h1>
                  </div>
                </div>
              </div>
            );
          })}
          <div id="me-com">
            <div id="me-pro">
              <img src={blog?.user?.profileImage} alt="" />
            </div>
            <div id="me-com1">
              <h1>{blog?.user?.name}</h1>
              <input
                type="text"
                id="comment-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="type"
              />
            </div>
            <div id="co-button">
              <FaArrowUpFromBracket
                style={{ fontSize: "30px" }}
                onClick={() => {
                  postComment(blog?._id, text);
                  console.log(blog?._id, text);
                  setText("");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
