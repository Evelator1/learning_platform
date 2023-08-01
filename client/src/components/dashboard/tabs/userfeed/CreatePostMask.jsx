import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { cols } from "../../../../colorSchema";
import { axiosClient } from "../../../../axiosClient";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";

import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";

export default function CreatePostMask( {posts, setPosts}) {
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
    formData.append("postCategory", "communityPost");
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }
    console.log(data);

    axiosClient
      .post("http://localhost:3010/post/newPost", formData)
      .then((response) => {
        console.log(response.data, posts);

        setPosts([ {...response.data, author:user}, ...posts ])
      })
      .catch((err) => {
        console.error(err);
      });
    reset();
    
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
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
          <h1 className="text-center">Share with the Community</h1>

          <Form.Group controlId="content">
            <Form.Control
              size="lg"
              type="post"
              placeholder="Post Something"
              {...register("content", {
                required: "empty Posts are not allowed",
              })}
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
                    className="w-100 rounded-md"
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
      </div>
    </div>
  );
}
