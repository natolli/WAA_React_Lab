import React, { useState } from "react";
import { Posts } from "./Posts";
import { PostDetail } from "./PostDetail";

export const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 111, title: "Happiness", author: "John" },
    { id: 112, title: "MIU", author: "Enjoy Life" },
    { id: 113, title: "Dean", author: "Jasmine" },
  ]);
  const [title, setTitle] = useState("");
  const [selectedBox, setSelectedBox] = useState();

  const changeTitle = () => {
    const postsEdi = posts.map((post) =>
      post.id === 111 ? { ...post, title } : post
    );
    setPosts([...postsEdi]);
    setTitle("");
  };

  return (
    <div>
      <Posts posts={posts} setSelectedBox={setSelectedBox} />
      <div className="input_container">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="button"
          onClick={() => title !== "" && changeTitle()}
        >
          Change Name
        </button>
      </div>
      {selectedBox && <PostDetail post={selectedBox} />}
    </div>
  );
};
