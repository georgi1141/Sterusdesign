import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Login() {
  return (
    <div className="login-page">
      <div className="welcome-content">
        <h2>Welcome back </h2>
        <p className="login-text">
          Sign back in to your account to explore the world of premium vehicles,
          exclusive offers, and a seamless car-buying experience tailored to
          your preferences. Your dream car awaits!{" "}
        </p>
      </div>
      <div className="form-container">
        <div className="form-wrapper">
          <h2>Login</h2>
          <Form
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 30,
            }}
            style={{
              maxWidth: 800,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter valid email!",
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
          <p>
            Don't have na account yet?{" "}
            <Link className="register-btn" to="/register">
              Register!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
