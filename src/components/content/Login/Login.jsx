import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./loginAndRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/userService";
import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "../../globalContext/GlobalAppContext";



function Login() {

    const navigate = useNavigate()

    const { user, setUser } = useGlobalContext();

    const onFinish = async ({ email, password }) => {

        try {
            const newUser = await login(email, password);
            if (newUser.code == 403) {
                toast.warn(newUser.message);
                return;
            }
            setUser(newUser)
            navigate('/')
        } catch (error) {
            console.log(error)
            toast.error(error.message);
        }
    };


    return (
        <div className="login-page">
            <ToastContainer position="top-center" />
            <div className="welcome-content">
                <h2>Welcome back </h2>
                <p className="login-text">
                    Sign back in to your account to explore the world of premium vehicles,
                    exclusive offers, and a seamless car-buying experience tailored to
                    your preferences. Your dream car awaits!
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
