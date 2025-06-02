import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(result.data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchPosts();
  }, []);
  console.log("i am here", error);
  if (error) {
    return <div>not found </div>;
  }

  return (
    <div>
      <h1>Blog Post !!</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" Component={PostsList}></Route>
    </Routes>
  );
};
export default App;
