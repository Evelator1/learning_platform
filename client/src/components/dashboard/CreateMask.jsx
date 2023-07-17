import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
export default function CreateMask() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    axios
      .post("http://localhost:3010/post/new", {
        author: data.author,
        content: data.content,
      })
      .then((response) => {
        console.log(response)
        })
      .catch((err) => {
        console.error(err);
      });
    reset();
  };

  return (
    <div  style={{ width: '38rem' }}
    className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="container-fluid w-sm-75 p-5 rounded-4 bg-light">
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
  )
}
