import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function AddPost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/posts", { title, author, content })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding post:", error));
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
