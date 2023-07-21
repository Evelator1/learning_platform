import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { axiosClient } from "../axiosClient";

import { cols } from "../colorSchema";
export default function Login({ setUserInfo }) {
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
        if ((response.status = 200)) {
          const {
            userWishWelcome,
            profilePicture,
            _id,
            username,
            email,
            personalInfo,
          } = response.data;
          setUserInfo({
            userWishWelcome,
            profilePicture,
            _id,
            username,
            email,
            personalInfo,
          });
          console.log("authentication complete, Welcome", response.username);
          if (response.data.userWishWelcome) {
            navigate(`/welcome/${response.data.username}`);
          } else {
            navigate(`/${response.data.username}`);
          }
        } else {
          console.log("error at Login");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    reset();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 "
      style={{
        backgroundColor: cols.white,
        color: cols.black,
        paddingTop: "-2rem",
      }}
    >
      <div
        className="col-lg-6 col-md-8 col-sm-9 col-10 container-fluid  p-5 rounded-4 fs-5"
        style={{ backgroundColor: cols.lila, color: cols.black }}
      >
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
          <p className="text-left text-decoration-none">
            Forgot&nbsp;
            <Link to="/resetPassword" className="text-decoration-none">
              {"Password"}
            </Link>
            ?{" "}
          </p>
          <p className="text-left text-decoration-none">
            New to GRADBOOK?{" "}
            <Link to="/signup" className="text-decoration-none">
              {"Sign up"}
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
