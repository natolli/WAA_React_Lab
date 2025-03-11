import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Comment } from "./Comment";

export function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/posts/${id}`)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting post:", error));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <strong>Author:</strong> {post.author}
      </p>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete</button>
      <h3>Comments</h3>
      <ul>
        {post.comments &&
          post.comments.map((comment) => (
            <Comment key={comment.id} text={comment.text} />
          ))}
      </ul>
    </div>
  );
}
