import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { cols } from "../../../../colorSchema";
import { axiosClient } from "../../../../axiosClient";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

export default function CreatePostMask() {
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
    formData.append("content", data.content);
    formData.append("postCategory", "review");
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }
    console.log(data);

    axiosClient
      .post("http://localhost:3010/post/newPost", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
    reset();
  };
  return (
    <div
      style={{ width: "80%" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        className="container-fluid  p-5 rounded my-5"
        style={{
          // border: "none",
          backgroundColor: cols.lila,
          color: cols.black,
          border: `2px solid ${cols.gray}`,
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">How was your experience?</h3>

          <Form.Group controlId="content">
            <Form.Control
            as="textarea"
              type="post"
              placeholder="Post Something"
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
                backgroundColor: cols.yellow,
                color: cols.black,
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
                  fontSize={"2rem"}
                />
              )}
            </Button>

            <Button
              type="submit"
              style={{
                backgroundColor: cols.yellow,
                color: cols.black,
                border: "none",
                fontSize:"2rem",
                margin:"0 0rem 0 1rem"
              }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
