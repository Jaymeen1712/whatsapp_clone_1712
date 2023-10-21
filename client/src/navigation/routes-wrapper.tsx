import React, { useEffect } from "react";
import dashboard from "../pages/project/dashboard";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import Cookies from "js-cookie";

import signup from "../pages/authentication/signup";
import login from "../pages/authentication/login";
import { handleGetSingleUser } from "../api";
import { useAppStore } from "../store";
import GuardRoute from "./guard-route";
import PrivateRoute from "./private-routes";
import PageNotFound from "../components/page-not-found";

const guardRoutes = [
  {
    component: signup,
    path: "/signup",
  },
  {
    component: login,
    path: "/login",
  },
];

const privateRoutes = [
  {
    component: dashboard,
    path: "/dashboard",
  },
];

const RoutesWrapper = () => {
  const navigate = useNavigate();
  const { setCurrentUserData } = useAppStore();

  useEffect(() => {
    const uuid = Cookies.get("user_id");
    const getData = async () => {
      if (uuid) {
        const response = await handleGetSingleUser({ uuid });
        setCurrentUserData(response.data.users[0]);
      }
    };
    getData();
  }, [navigate]);

  return (
    <div className="outer-container">
      <Layout className="outer-layer">
        <Routes>
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/*" element={<PageNotFound />} />
          {guardRoutes.map(({ component, path }) => (
            <Route
              element={<GuardRoute Component={component} />}
              path={path}
              key={path}
            />
          ))}
          {privateRoutes.map(({ component, path }) => (
            <Route
              element={<PrivateRoute Component={component} />}
              path={path}
              key={path}
            />
          ))}
        </Routes>
      </Layout>
    </div>
  );
};

export default RoutesWrapper;
