import React from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { handleLoginAPI } from "../../../api";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const responseAndErrors = await handleLoginAPI({ username, password });
      const response = responseAndErrors?.[0];

      if (response && response.data.is_user_valid) {
        navigate("/dashboard");
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error("Technical error occurred!");
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>

        <div className="flex justify-center m-b-8" style={{ color: "#FFF" }}>
          Don't have an account?
        </div>

        <div className="flex justify-center">
          <Link to="/signup">Sign Up</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
