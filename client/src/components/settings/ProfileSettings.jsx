import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { userMenuOptions } from "../../userMenuOptions";
import { axiosClient } from "../../axiosClient";
import Switch from "@mui/material/Switch";
import { cols } from "../../colorSchema";
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function AccountSettings() {
  const params = useParams();
  const [userSettings, setUserSettings] = useState();
  useEffect(() => {
    axiosClient
      // .get(`http://localhost:3010/users/${params.username}`) //user route
      .get(`http://localhost:3010/auth/profile`) //auth route
      .then((response) => {
        const { userWishWelcome, profilePicture, _id, username, email } =
          response.data;
        setUserSettings({
          userWishWelcome,
          profilePicture,
          _id,
          username,
          email,
        });
        if (response.data.username === params.username) {
          console.log("match!");
        } else {
          navigate(`/login`);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(userSettings);

  const sendPreferences = (e) => {
    const updatedUserInfo = {
      userWishWelcome: e.target.checked,
    };

    axiosClient
      .put(`http://localhost:3010/users/${userSettings._id}`, updatedUserInfo)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    userSettings && (
      <div
        style={{ marginTop: "10vw", padding: "2rem" }}
        className="pt-5 pt-md-3pt-xl-0"
      >
        <h1>PROFILE SETTINGS: </h1>

        <span className="form-check-span " style={{ color: cols.black }}>
          <h3> View welcome message on login</h3>
          <Switch {...label} defaultChecked onChange={sendPreferences} />
        </span>
        
        <h3>change Username</h3>
        <span>{userSettings.username}</span>
        <h3>manage Personal Information</h3>
        <span></span>

        <h3>manage Profile Image</h3>
        <span>
          <img
            src={userSettings.profilePicture}
            alt=""
            style={{ width: "20rem" }}
          />
        </span>
      </div>
    )
  );
}
