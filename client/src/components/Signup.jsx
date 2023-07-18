import {useState} from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";


export default function Signup({setUserInfo}){
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
    .post("http://localhost:3010/auth/signup", {
    username: data.username,  
    email: data.email,
    password: data.password,
    })
    .then((response) => {
      if(response.status=200){
         setUserInfo(response.data)

         console.log("Registation Complete, Welcome",response.data.username)
         navigate(`/welcome/${response.data.username}`);
        } else{
      console.log("error at Signup")
    }  })
    .catch((err) => {
      console.error(err);
    });
  reset();
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="container-fluid w-75 p-5 rounded-4 bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Sign up</h3>

          <Form.Group controlId="username" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a username"
              {...register("username", { required: "Name is required" })}
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-3">
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

          <Form.Group controlId="confirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
              {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};


