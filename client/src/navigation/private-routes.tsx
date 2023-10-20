import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface PrivateRouteProps {
  Component: ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  const isAuthenticated = (): boolean => {
    const is_user_valid = Cookies.get("user_id");
    return !!is_user_valid;
  };

  return <>{isAuthenticated() ? <Component /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
