import React, { useEffect, useState } from "react";
import { Posts } from "./Posts";
import axios from "axios";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <Link to="/add-post">Add New Post</Link>
      <Posts posts={posts} />
    </div>
  );
};
