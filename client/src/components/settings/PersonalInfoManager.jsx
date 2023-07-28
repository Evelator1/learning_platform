import { cols } from "../../colorSchema";
import { useForm } from "react-hook-form";

import { axiosClient } from "../../axiosClient";

export default function PersonalInfoManager({ userSettings }) {
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
    <div className="my-3 w-100">
      <h3>Personal Information</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
           style={{width:"22rem"}}
          defaultValue={userSettings.personalInfo}
          {...register("personalInfo", { required: true, maxLength: 200 })}
        />
        <input type="submit" value={"submit Information"} />
      </form>
    </div>
  );
}
