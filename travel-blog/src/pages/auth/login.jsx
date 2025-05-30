import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Nav from "../../components/Nav";
import { useState } from "react";

const Login = () => {
  const { loggedIn, toggleAuth } = useAuth();
  const [inputUsername, setInputUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const afterLoginGoTo = location.state?.afterLoginGoTo?.pathname || "/"; //question tell us if it is undefined or not

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
      <div style={{ padding: "2rem" }}>
        <h2>Login Page</h2>
        {loggedIn ? (
          <p>You are already logged in</p>
        ) : (
          <>
            <input
              type="text"
              value={inputUsername}
              onChange={(event) => setInputUsername(event.target.value)}
              placeholder="Username"
            />
            <button onClick={handleLogin}>Click to Login </button>
          </>
        )}
      </div>
    </>
  );
};
export default Login;
