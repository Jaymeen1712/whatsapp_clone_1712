import Cookies from "js-cookie";
import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

interface GuardRouteDeps {
  Component: ComponentType<any>;
}

const GuardRoute: React.FC<GuardRouteDeps> = ({ Component, ...rest }) => {
  const isAuthenticated = (): boolean => {
    const is_user_valid = Cookies.get("user_id");
    return !!is_user_valid;
  };

  return (
    <>
      {isAuthenticated() ? <Navigate to="/dashboard" /> : <Component />}
    </>
  );
};

export default GuardRoute;
