import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  
  const onSubmit = (data) => {
    console.log('Login form submitted');
    console.log('Email:', data.email);
    console.log('Password:', data.password);
    console.log('Remember Me:', data.rememberMe);
    reset()
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="container-fluid w-75 p-5 rounded-4 bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Sign In</h3>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register('email', { required: 'Email is required' })}
            />
          </Form.Group>

          <Form.Group controlId="password" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
               type="password"
               placeholder="Enter password"
               {...register('password', { required: 'Password is required' })}
            />
          </Form.Group>

          <Form.Group controlId="rememberMe" className="mb-3">
            <Form.Check
             type="checkbox"
             label="Remember Me"
             {...register('rememberMe')}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <p className="text-right">
            Forgot&nbsp;<Link to="/resetPassword">{"Password"}</Link>?{" "}
            <Link to="/signup">{"Sign up"}</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;

// import "./style.css";
// import Form from 'react-bootstrap/Form'

// export default function Login() {
//   return (
//     <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
//       <div className="form-container p-5 rounded-4 bg-light">
//         <form>
//           <h3 className="text-center">Sign In</h3>
//           <div className="mb-2">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               className="form-control"
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="form-control"
//             />
//           </div>
//           <div className="mb-2">
//             <input
//               type="checkbox"
//               className="custom-control custom-checkbox"
//               id="check"
//             />
//             <label htmlFor="check" className="custom-input-label">
//               Remember&nbsp;me
//             </label>
//           </div>
//           <div className="d-grid">
//             <button className="btn btn-primary">Sign&nbsp;In</button>
//           </div>
//           <p className="text-right">
//             Forgot <a href="resetPassword">Password?</a>{" "}
//             <a href="">Sign&nbsp;up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }
