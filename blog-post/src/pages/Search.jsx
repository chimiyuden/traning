// import { useState } from "react";
// import PostsList from "./PostsList";
// import Comment from "./Comment";

// const Search = () => {
//   const [input, setInput] = useState("");
//   const [view, setView] = useState("none"); // "all", "single", "error"
//   const [postId, setPostId] = useState(null);

//   const handleSearch = () => {
//     const text = input.toLowerCase().trim();

//     if (text === "all posts") {
//       setView("all");
//       setPostId(null);
//     } else if (text.startsWith("post ")) {
//       const id = parseInt(text.split(" ")[1]);
//       if (!isNaN(id)) {
//         setView("single");
//         setPostId(id);
//       } else {
//         setView("error");
//       }
//     } else {
//       setView("error");
//     }
//   };

//   return (
//     <div>
//       <h2>Search</h2>
//       <input
//         type="text"
//         value={input}
//         placeholder='Type "all posts" or "post 1"'
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {view === "all" && <PostsList />}
//       {view === "single" && <Comment customId={postId} />}
//       {view === "error" && <p>Invalid input. Try "all posts" or "post 1".</p>}
//     </div>
//   );
// };

// export default Search;
