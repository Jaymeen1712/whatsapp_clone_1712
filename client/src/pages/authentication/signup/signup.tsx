import React from "react";
import { Form, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { handleSignupAPI } from "../../../api";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
  }) => {
    await handleSignupAPI(values);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <Form
        name="signup-form"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

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
            Sign Up
          </Button>
        </Form.Item>

        <div className="flex justify-center m-b-8" style={{ color: "#FFF" }}>
          Back to
        </div>

        <div className="flex justify-center">
          <Link to="/login">Login</Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
