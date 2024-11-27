import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isTokenExpired from "../utils/authUtils";

/* eslint-disable react/prop-types */
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    const res = isTokenExpired(token);

    if (res) {
      navigate("/login");
    }
  });

  return <div>{children}</div>;
};

export default ProtectedRoute;
