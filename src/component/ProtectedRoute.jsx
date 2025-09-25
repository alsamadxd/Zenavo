import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from "../context/UserContext";

const ProtectedRoute = () => {
  const { username } =useUser();
  return username ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
