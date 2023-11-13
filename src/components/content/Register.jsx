import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";
import { Link } from "react-router-dom";

function Register() {
  const [isMatching, setIsMatching] = useState(true);
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");


  const onFinish = (values) => {
    console.log("Success:", values);
    
    console.log()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleRePasswordChange = (e) => {
    setRepass(e.target.value);
    setIsMatching(e.target.value === pass);
  };

  return (
    <div className="login-page">
      <div className="welcome-content">
        <h2>Get started now</h2>
        <p className="login-text">
        Are you ready to embark on a journey to find your dream car?<br />
        All you need to do is register on our platform. It's quick, easy, and opens up a world of possibilities for you to explore.
        </p>
      </div>
      <div className="form-container">
      <div className="form-wrapper">
      <h2>Register</h2>
      <Form
        name="basic"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 30,
        }}
        style={{
          width: 400,
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
              message: "Please enter a valid email!",
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
          <Input.Password value={pass} onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item
          label="Repeat password"
          name="repass"
          rules={[
            {
              required: true,
              message: "Please repeat your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  setIsMatching(true);
                  return Promise.resolve();
                }
                setIsMatching(false);
                return Promise.reject(
                  new Error("Passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password value={repass} onChange={handleRePasswordChange} />
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
            Register
          </Button>
        </Form.Item>
      </Form>
      <p>
        Have an account?{" "}
        <Link className="register-btn" to="/login">
          Login!
        </Link>
      </p>
    </div>
      </div>
    </div>
  );
}

export default Register;
