import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="info-box">
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Author: {post.author}</p>
      </div>
    </Link>
  );
};

export default Post;
