import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("userToken"); // Check if user is logged in

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
