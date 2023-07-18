import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import {axiosClient} from "../axiosClient";

export default function Login({setUserInfo}){
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axiosClient
      .post("http://localhost:3010/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if(response.status=200){
           setUserInfo(response.data)

           console.log("authentication complete, Welcome",response.data)
           if(response.data.userWishWelcome){
            navigate(`/welcome/${response.data.username}`);
           }else{
            navigate(`/${response.data.username}`);
           }
          } else{
        console.log("error at Login")
      }  })
      .catch((err) => {
        console.error(err);
      });
    reset();
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="container-fluid w-sm-75 p-5 rounded-4 bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Sign In</h3>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
          </Form.Group>

          <Form.Group controlId="rememberMe" className="mb-3">
            <Form.Check
              type="checkbox"
              label="Remember Me"
              {...register("rememberMe")}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <p className="text-right text-decoration-none">
            Forgot&nbsp;<Link to="/resetPassword">{"Password"}</Link>?{" "}
            <Link to="/signup">{"Sign up"}</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};


