import React from "react";
import { Redirect, Route } from "react-router-dom";

const protectRoute = ({ component: Component, ...restProps }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(restProps);
  return (
    <Route
      {...restProps}
      element={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default protectRoute;
