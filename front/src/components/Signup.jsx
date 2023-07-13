import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const Signup = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup form submitted");
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Password:", data.password);
    console.log("Confirm Password:", data.confirmPassword);
    reset()
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="container-fluid w-75 p-5 rounded-4 bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Sign up</h3>

          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              {...register("name", { required: "Name is required" })}
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

export default Signup;
