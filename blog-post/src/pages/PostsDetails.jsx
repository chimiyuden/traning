import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getComments, getPost } from "../services/Api.config";

const Comment = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchComment = async () => {
      setLoading(true);
      try {
        const fetchPost = await getPost(id);
        setPosts(fetchPost.data);
        const fetchComment = await getComments(id);
        setComment(fetchComment.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    };
    fetchComment();
  }, [id]);

  if (loading) {
    return <div>Page loading</div>;
  }
  if (!posts) {
    return <div>Failed to load post or comments </div>;
  }
  if (error) {
    return <div>Not found </div>;
  }

  return (
    <div className="comment-container">
      <Link to="/" className="comment-back">
        &larr; Back to Posts
      </Link>
      <h1 className="comment-post-title">{posts.title}</h1>
      <h5 className="comment-post-body">{posts.body}</h5>
      <div className="comments-section">
        <h2>Comments</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment-card">
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
              <p>{comment.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
