import { Typography } from "antd";
import React from "react";

const EmptyMessage = () => {
  return (
    <div className="empty-message-container">
      <div
        className="flex justify-center items-center"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Typography.Title
          style={{
            color: "#aebac1",
          }}
        >
          Whatsapp Web
        </Typography.Title>
      </div>
    </div>
  );
};

export default EmptyMessage;
