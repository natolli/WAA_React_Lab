import React from "react";

export const PostDetail = ({ post: { title, author } }) => {
  return (
    <div class="box">
      <h2 class="title">{title}</h2>
      <p class="author">{author}</p>
      <p class="description">This is the content of the post...</p>
      <div class="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
