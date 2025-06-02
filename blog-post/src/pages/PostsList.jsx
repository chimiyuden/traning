// function PostsList() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     api
//       .get("/posts")
//       .then((res) => setPosts(res.data))
//       .catch(() => setError("Failed to load posts"))
//       .finally(() => setLoading(false));
//   }, []);
//   if (loading) return <p>Loading posts...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>All Blog Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link to={`/posts/${post.id}`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default PostsList;
