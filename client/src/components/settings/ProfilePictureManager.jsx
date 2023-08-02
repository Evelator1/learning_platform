import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { axiosClient } from "../../axiosClient";
import { cols } from "../../colorSchema";
import WelcomePageButton from "../LandingPage/WelcomePageButton";

export default function ProfilePictureManager({ userSettings }) {
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
      .patch(`/users/${userSettings._id}/update-profile-pic`, formData)
      .then((response) => {
        reset();
        // navigate(`/settings/profile/${userSettings.username}`);
        window.location.reload(false); //refresh the page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCurrentPic = () => {
    const replaceDefault = {
      profilePicture: userSettings.profilePicture,
      defaultPic:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png",
    };
    console.log(replaceDefault, "is the body of the  request");
    axiosClient
      .patch(`/users/${userSettings._id}/remove-profile-pic`, {
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
    <div className="mt-5 w-100">
      <h3>Profile Image:</h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-screen flex-col items-center justify-center bg-stone-400"
      >
        <div>
          <input
            style={{ width: "22rem", height: "3rem", marginRight: "1rem" }}
            type="file"
            id="image"
            accept="image/*"
            {...register("profilePicture", { required: true })}
            className=" rounded-md border border-gray-800 bg-stone-100 px-4 py-2"
          />

          <WelcomePageButton
            content={"submit"}
            color={cols.lila}
            textColor={cols.black}
            linkTo={null}
            type={"submit"}
          />
        </div>

        <div>
          <img
            src={userSettings.profilePicture}
            className="rounded-circle shadow-4 border border-1 border-white"
            style={{
              marginTop: "2rem",
              width: "10rem",
              height: "auto",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            alt={userSettings.username}
          />
        </div>
      </form>
      <div className="mt-2">
        {/* <button
          onClick={deleteCurrentPic}
          className="w-80 cursor-pointer rounded-md bg-danger px-4 py-2 text-stone-50 hover:bg-stone-700"
        >
          Delete current pic
        </button> */}
        <WelcomePageButton
          onClick={deleteCurrentPic}
          content={"Delete current pic"}
          color={cols.lila}
          textColor={cols.black}
          type={"submit"}
        />
      </div>
    </div>
  );
}
