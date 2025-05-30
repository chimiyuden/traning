import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages";
import About from "../pages/about/components/Team";
import Profile from "../pages/profile";
import { useAuth } from "../context/AuthContext";
import Login from "../pages/auth/login";
import Country from "../pages/countries";
import CountryDetail from "../pages/countries/[id]";

//private route wrapper
const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ afterLoginGoTo: location }} replace />
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/login" Component={Login} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/countries"
        element={
          <ProtectedRoute>
            <Country />
          </ProtectedRoute>
        }
      />
      <Route path="/country/:id" Component={CountryDetail} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;
