import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUsername] = useState("");

  useEffect(() => {
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username") || "";
    setLoggedIn(isLogged);
    setUsername(storedUsername);
  }, []);

  // const login = (user) => {
  //   localStorage.setItem("isLoggedIn", "true");
  //   localStorage.setItem("username", user);
  //   setUsername(user);
  //   setLoggedIn(true);
  // };

  // const logout = () => {
  //   localStorage.setItem("isLoggedIn", "false");
  //   localStorage.removeItem("username");
  //   setUsername("");
  //   setLoggedIn(false);
  // };
  const toggleAuth = (user = null) => {
    if (!loggedIn) {
      // Logging in
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", user);
      setUsername(user);
      setLoggedIn(true);
    } else {
      // Logging out
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("username", "");
      setUsername("");
      setLoggedIn(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, userName, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
