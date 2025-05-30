// import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import Nav from "../../components/Nav";
// import { useState } from "react";

// const Login = () => {
//   const { loggedIn, toggleAuth } = useAuth();
//   const [inputUsername, setInputUsername] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/"; //question tell us if it is undefined or not

//   const handleLogin = () => {
//     if (!inputUsername) {
//       alert("Username required");
//       return;
//     }
//     toggleAuth(inputUsername);
//     setInputUsername("");
//     navigate(afterLoginGoTo, { replace: true });
//   };
//   return (
//     <>
//       <Nav />
//       <div style={{ padding: "2rem" }}>
//         <h2>Login Page</h2>
//         {loggedIn ? (
//           <p>You are already logged in</p>
//         ) : (
//           <>
//             <input
//               type="text"
//               value={inputUsername}
//               onChange={(event) => setInputUsername(event.target.value)}
//               placeholder="Username"
//             />
//             <button onClick={handleLogin}>Click to Login </button>
//           </>
//         )}
//       </div>
//     </>
//   );
// };
// export default Login;
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Nav from "../../components/Nav";
import { useState } from "react";

const Login = () => {
  const { loggedIn, toggleAuth } = useAuth();
  const [inputUsername, setInputUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/";

  const handleLogin = () => {
    if (!inputUsername) {
      alert("Username required");
      return;
    }
    toggleAuth(inputUsername);
    setInputUsername("");
    navigate(afterLoginGoTo, { replace: true });
  };

  return (
    <>
      <Nav />
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}> Login to Continue</h2>
          {loggedIn ? (
            <p style={styles.message}>You are already logged in ✨</p>
          ) : (
            <>
              <input
                type="text"
                value={inputUsername}
                onChange={(event) => setInputUsername(event.target.value)}
                placeholder="Enter your username"
                style={styles.input}
              />
              <button onClick={handleLogin} style={styles.button}>
                Click to Login 🚀
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    background: "linear-gradient(to right, #fce4ec, #e3f2fd)",
    minHeight: "100vh",
    fontFamily: "'Quicksand', sans-serif",
  },
  card: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    color: "#6a1b9a",
    marginBottom: "1rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "1rem",
    outline: "none",
  },
  button: {
    backgroundColor: "#81c784", // sage green
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  message: {
    fontSize: "1.1rem",
    color: "#4a148c",
  },
};
