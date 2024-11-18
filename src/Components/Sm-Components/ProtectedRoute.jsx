// src/Components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

// Prop validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Ensures `children` is a valid React node and required
};

export default ProtectedRoute;
