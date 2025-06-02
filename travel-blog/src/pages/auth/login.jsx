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
          <h2 style={styles.title}>🌸 Login to Continue</h2>
          {loggedIn ? (
            <p style={styles.message}>You're already logged in ✨</p>
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
    padding: "2rem",
    backgroundImage:
      "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk1My1teW50LTU4LWtrcTZ3Z294LmpwZw.jpg')",

    backgroundPosition: "center",
    minHeight: "100vh",
    fontFamily: "'Quicksand', sans-serif",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "2.5rem",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    color: "#6a1b9a",
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
  },
  input: {
    width: "100%",
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "1.2rem",
    outline: "none",
    backgroundColor: "#fdfdfd",
  },
  button: {
    backgroundColor: "#ff8a65",
    color: "white",
    border: "none",
    padding: "0.75rem 1.5rem",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "background 0.3s ease",
  },
  message: {
    fontSize: "1.2rem",
    color: "#4a148c",
  },
};
