import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { axiosClient } from "../../axiosClient";

export default function ProfilePictureUpload({ userInfo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

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
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCurrentPic = () => {
    axiosClient
      .put(`http://localhost:3010/users/${userInfo._id}`, {
        profilePicture: "",
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
    <div className="mt-5">
     <h3>manage Profile Image</h3>
        <span>
          <img
            src={userInfo.profilePicture}
            alt=""
            style={{ width: "20rem" }}
          />
        </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-screen flex-col items-center justify-center bg-stone-400"
      >
        <div  >
          <label htmlFor="image" className="mb-1 block">
         Select a new Profile Pic
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register("profilePicture", { required: true })}
            className="w-80 rounded-md border border-gray-800 bg-stone-100 px-4 py-2"
          />
           <button
            type="submit"
            className=" cursor-pointer rounded-md bg-stone-900 px-4 py-2 text-stone-50 hover:bg-stone-700"
          >
            Upload
          </button>
        </div>

       
      </form>
      <div className="mt-5">
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
