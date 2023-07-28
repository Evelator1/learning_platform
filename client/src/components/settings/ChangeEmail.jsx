import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { userMenuOptions } from "../../userMenuOptions";


import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function ChangeEmail() {
  const { user,changeEmail} = useContext(AuthContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // changeEmail(data);
    console.log(data)

    reset();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        change Email
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>edit Email Adress</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>your current address:</Form.Label>
              <Form.Control
                type="email"
                placeholder={userMenuOptions.email}
               value={user.email}
                {...register("email", { required: "Email is required" })}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="newEmail" className="mb-3">
              <Form.Label>Enter new Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Type the new email"
                {...register("newEmail", {
                  required: "New Email is required",
                  validate: (value) =>  value === user.email || "Email is Already in use",
                })}
              />
              {errors.newEmail && <p>{errors.newEmail.message}</p>}
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>enter your Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register("password", { required: "Password is required" })}
              />
            </Form.Group>

            {/* <Button variant="primary" type="submit" onClick={handleClose}>
              Confirm
            </Button> */}
          <input type="submit"  value={"submit"} onClick={handleClose} />
          </Form>
        
       


        </Modal.Body>
      </Modal>
    </>
  );
}
