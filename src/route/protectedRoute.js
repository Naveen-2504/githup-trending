import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const Component = isAuthenticated ? <Component /> : <Navigate to="/login" />;

  return (
    <Route
      {...rest}
      render={<Component />}
    />
  );
};

export default ProtectedRoute;
