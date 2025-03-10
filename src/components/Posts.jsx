import React from "react";
import Post from "./Post";

export const Posts = ({ posts, setSelectedBox }) => {
  return (
    <div className="posts_container">
      {posts.map((post) => (
        <Post post={post} key={post.id} setSelectedBox={setSelectedBox} />
      ))}
    </div>
  );
};
