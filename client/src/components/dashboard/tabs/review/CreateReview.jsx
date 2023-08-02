import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row } from "react-bootstrap";
import { cols } from "../../../../colorSchema";
import { axiosClient } from "../../../../axiosClient";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

export default function CreateReviewMask() {
  const { user } = useContext(AuthContext);
  const [imgUpload, setImgUpload] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("author", user._id);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("postCategory", "review");

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    axiosClient
      .post("http://localhost:3010/reviews/newReview", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
    reset();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row
        className="container-fluid justify-content-center py-3 rounded my-5 col-xs-12 col-lg-11  "
        style={{
          backgroundColor: cols.lila,
          color: cols.black,
          border: `2px solid ${cols.gray}`,
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center">How was your experience?</h1>

          <Form.Group controlId="content">
            <Form.Control
              className="my-1"
              type="post"
              placeholder="Title"
              {...register("title", {
                required: "empty Posts are not allowed",
              })}
              rows={4}
            />
            <Form.Control
              as="textarea"
              type="post"
              placeholder="Share your review about a coding bootcamp or a job with the community"
              {...register("content", {
                required: "empty Posts are not allowed",
              })}
              rows={4}
            />
          </Form.Group>

          <div
            className={`my-3 d-flex justify-content-${
              imgUpload ? "between" : "end"
            }`}
          >
            <Button
              style={{
                backgroundColor: cols.black,
                color: cols.white,
                border: "none",
              }}
            >
              {imgUpload ? (
                <>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    {...register("image", { required: true })}
                    className="w-100  rounded-md   "
                  />
                </>
              ) : (
                <FontAwesomeIcon
                  icon={faImage}
                  onClick={() => setImgUpload(true)}
                  fontSize={"1.5rem"}
                />
              )}
            </Button>

            <Button
              type="submit"
              style={{
                backgroundColor: cols.black,
                color: cols.white,
                border: "none",
                fontSize: "1.5rem",
                margin: "0 0rem 0 1rem",
              }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
