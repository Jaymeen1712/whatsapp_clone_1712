import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "antd";

const PageNotFound = () => {
  const navigate = useNavigate();

  const returnToBack = () => {
    navigate(-1);
  };

  return (
    <div className="HV-center table-center page-not-found">
      <div className="text-center grayWhite">
        <div className="m-b-24">
          <h1 className="h4">Error 404 - Page not found</h1>
          <p className="m-b-16">
            Looks like the page you want to access does not exist.
          </p>
        </div>
        <div className="ant-row ant-row-center">
          <Button type="primary" onClick={returnToBack}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PageNotFound;
