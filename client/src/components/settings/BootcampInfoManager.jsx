import { cols } from "../../colorSchema";
import { useForm } from "react-hook-form";
import WelcomePageButton from "../LandingPage/WelcomePageButton";
import { axiosClient } from "../../axiosClient";

export default function BootcampInfoManager({ userSettings }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axiosClient
      .put(`/users/${userSettings._id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-3">
      <h3>Your Bootcamp:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="textarea"
          style={{ width: "22rem", height: "3rem", marginRight: "1rem" }}
          defaultValue={userSettings.bootcamp}
          {...register("bootcamp", { required: true, maxLength: 200 })}
        />
        {/* <input type="submit" value={"submit Information"} /> */}
        <WelcomePageButton
          content={"submit"}
          color={cols.lila}
          textColor={cols.black}
          linkTo={null}
          type={"submit"}
        />
      </form>
    </div>
  );
}
