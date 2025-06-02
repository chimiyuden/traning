// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import api from "../services/api";

// function PostDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [post, setPost] = useState(null);
//   const [comments, setComments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [postRes, commentsRes] = await Promise.all([
//           api.get(`/posts/${id}`),
//           api.get(`/posts/${id}/comments`),
//         ]);
//         setPost(postRes.data);
//         setComments(commentsRes.data);
//       } catch {
//         setError("Failed to load post or comments");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) return <p>Loading post...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <button onClick={() => navigate(-1)}>← Back to Posts</button>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <h2>Comments</h2>
//       <ul>
//         {comments.map((comment) => (
//           <li key={comment.id}>
//             <strong>{comment.name}</strong> ({comment.email})
//             <p>{comment.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostDetail;
