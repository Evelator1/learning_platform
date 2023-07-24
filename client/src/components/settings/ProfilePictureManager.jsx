import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { axiosClient } from "../../axiosClient";

export default function ProfilePictureManager({ userInfo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("profilePicture", data.profilePicture[0]);
    console.log(data.profilePicture);

    axiosClient
      .patch(
        `http://localhost:3010/users/${userInfo._id}/update-profile-pic`,
        formData
      )
      .then((response) => {
        reset();
        // navigate(`/settings/profile/${userInfo.username}`);
        window.location.reload(false); //refresh the page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCurrentPic = () => {
    const replaceDefault = {
      profilePicture: userInfo.profilePicture,
      defaultPic:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png",
    };
    console.log(replaceDefault, "is the body of the  request");
    axiosClient
      .patch(`http://localhost:3010/users/${userInfo._id}/remove-profile-pic`, {
        replaceDefault,
      })
      .then((response) => {
        console.log(response);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-3 w-100">
      <h3>Profile Image</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-screen flex-col items-center justify-center bg-stone-400"
      >
        <div>
          <input
            style={{ width: "22rem" }}
            type="file"
            id="image"
            accept="image/*"
            {...register("profilePicture", { required: true })}
            className="w-100  rounded-md border border-gray-800 bg-stone-100 px-4 py-2"
          />

          <input type="submit" value={"submit"} />
        </div>

        <img src={userInfo.profilePicture} alt="" style={{ width: "22rem", marginTop:"2rem"}} />

      </form>
      <div className="mt-2">
        <button
          onClick={deleteCurrentPic}
          className="w-80 cursor-pointer rounded-md bg-danger px-4 py-2 text-stone-50 hover:bg-stone-700"
        >
          Delete current pic
        </button>
      </div>
    </div>
  );
}
