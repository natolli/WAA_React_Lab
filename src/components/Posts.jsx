import React from "react";
import Post from "./Post";

export const Posts = ({ posts }) => {
  return (
    <div className="posts_container">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};
