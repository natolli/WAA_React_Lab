import React from "react";

const Post = ({ post, setSelectedBox }) => {
  return (
    <div className="info-box" onClick={() => setSelectedBox(post)}>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default Post;
