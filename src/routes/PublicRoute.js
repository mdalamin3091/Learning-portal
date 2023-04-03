import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  return user?.id ? (
    user.role === "admin" ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/coursePlayer" />
    )
  ) : (
    children
  );
};

export default PublicRoute;
