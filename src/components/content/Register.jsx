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
    <div className="form-wrapper">
      <h2>Register</h2>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
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
  );
}

export default Register;
