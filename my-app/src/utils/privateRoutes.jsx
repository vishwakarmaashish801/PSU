import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, token } = useAuth();

    // If no user or token, redirect to the login page
    if (!user || !token) {
        return <Navigate to="/" replace />;
    }

    return children; // Render the protected component if authenticated
};

export default PrivateRoute;