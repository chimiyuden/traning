import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Nav = () => {
  const navigate = useNavigate();
  const { loggedIn, toggleAuth, userName } = useAuth();

  const handleAuth = () => {
    if (!loggedIn) {
      navigate("/login");
    } else {
      toggleAuth();
      navigate("/");
    }
  };

  const styles = {
    nav: {
      backdropFilter: "blur(10px)",
      background: "rgba(255, 240, 245, 0.6)", // light pink glass
      color: "#444",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      borderRadius: "0 0 20px 20px",
    },
    logo: {
      fontSize: "1.6rem",
      fontWeight: "bold",
      textDecoration: "none",
      color: "#ff69b4", // hot pink logo
      fontFamily: "'Comic Neue', cursive",
    },
    link: {
      color: "#6a5acd", // soft lavender blue
      textDecoration: "none",
      margin: "0 0.75rem",
      fontWeight: "500",
      transition: "all 0.3s",
    },
    input: {
      padding: "0.4rem 0.8rem",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.2)",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      color: "#444",
      outline: "none",
      fontFamily: "inherit",
    },
    button: {
      padding: "0.4rem 0.8rem",
      borderRadius: "12px",
      border: "none",
      backgroundColor: "#b2d8b2", // sage green
      color: "white",
      cursor: "pointer",
      fontWeight: "bold",
      marginLeft: "0.5rem",
      transition: "background 0.3s",
    },
    buttonLogout: {
      backgroundColor: "#ffb6c1", // baby pink logout
    },
    userText: {
      fontStyle: "italic",
      color: "#444",
    },
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        ✿ ChimiskiMiniBlog
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/countries" style={styles.link}>
          Countries
        </Link>
        {loggedIn && (
          <Link to="/profile" style={styles.link}>
            Profile
          </Link>
        )}

        {!loggedIn ? (
          <>
            <button onClick={handleAuth} style={styles.button}>
              Login
            </button>
          </>
        ) : (
          <>
            <span style={styles.userText}>Hi, {userName} 💖</span>
            <button
              onClick={handleAuth}
              style={{ ...styles.button, ...styles.buttonLogout }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
