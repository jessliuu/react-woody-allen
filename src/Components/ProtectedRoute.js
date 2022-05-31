import React from "react";
import useIsAuthenticated from "../utils/useIsAuthenticated";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();

  return <div>{isAuthenticated ? children : <Navigate to="/" replace />}</div>;
};

export default ProtectedRoute;
