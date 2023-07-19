import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { cols } from "../../colorSchema";
export default function CreateMask() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3010/newPost", {
        author: data.author,
        content: data.content,
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
      <div className="container-fluid  p-5 rounded my-5" style={{backgroundColor: cols.white, color:cols.black, border: `2px solid #999999`}}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center">Share with the Community</h3>
          <Form.Group controlId="email">
            <Form.Label>Post</Form.Label>
            <Form.Control
              type="post"
              placeholder="Post Something"
              {...register("post", { required: "empty Posts are not allowed" })}
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
