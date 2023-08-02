import { cols } from "../../colorSchema";
import { useForm } from "react-hook-form";
import WelcomePageButton from "../LandingPage/WelcomePageButton";
import { axiosClient } from "../../axiosClient";


export default function UsernameManager({userSettings}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axiosClient
      .put(`http://localhost:3010/users/${userSettings._id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-5 w-100">
      <h3>Username:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        style={{width:"22rem" , height:"3rem"}}
          defaultValue={userSettings.username}
          {...register("username", { required: true, maxLength: 20 })}
        />
        {/* <input type="submit" value={"submit Username"} /> */}
        <WelcomePageButton  content={"submit"} color={cols.lila} textColor={cols.black} linkTo={null} type={"submit"} />

      </form>
    </div>
  );
}
