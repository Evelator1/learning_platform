import { cols } from "../../colorSchema";
import { useForm } from "react-hook-form";

import { axiosClient } from "../../axiosClient";


export default function UsernameManager({userInfo}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axiosClient
      .put(`http://localhost:3010/users/${userInfo._id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-3 w-100">
      <h3>Username</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        style={{width:"22rem"}}
          defaultValue={userInfo.username}
          {...register("username", { required: true, maxLength: 20 })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
