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
        change Password
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>edit  Password</Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="currentPassword" className="mb-3">
              <Form.Label>your current password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Type the Current password"
               value={user.password}
                {...register("currentPassword", { required: "Email is required" })}
              />
            </Form.Group>

            <Form.Group controlId="newPassword" className="mb-3">
              <Form.Label>Enter new password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Type the new password"
                defaultValue={""}
                {...register("newPassword", {
                  required: "New Password is required",
                })}
              />
              {errors.newPassword && <p>{errors.newPassword.message}</p>}
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label>confirm new Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Retype the new password"
                {...register("newPassword", { required: "Password is required" })}
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
