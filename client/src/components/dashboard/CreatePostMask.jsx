import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { cols } from "../../colorSchema";
import { axiosClient } from "../../axiosClient";


export default function CreatePostMask({ userInfo }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    axiosClient
      .post("http://localhost:3010/post/newPost", {
        author: userInfo._id,
        content: data.content,
        postCategory: "communityPost",
        // image:""
      })

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
          backgroundColor: cols.white,
          color: cols.black,
          border: `2px solid #999999`,
        }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Share with the Community</h3>
          <Form.Group controlId="email">
            <Form.Label>Post</Form.Label>
            <Form.Control
              type="post"
              placeholder="Post Something"

              {...register("content", {
                required: "empty Posts are not allowed",
              })}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </div>
    </div>
  );
}

