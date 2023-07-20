import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { userMenuOptions } from "../../userMenuOptions";
import { axiosClient } from "../../axiosClient";
import Switch from "@mui/material/Switch";
import { cols } from "../../colorSchema";
const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function AccountSettings() {
  const params = useParams();
  const [userSettings, setUserSettings] = useState();
  useEffect(() => {
    axiosClient
      // .get(`http://localhost:3010/users/${params.username}`) //user route
      .get(`http://localhost:3010/auth/profile`) //auth route
      .then((response) => {
        const { userWishWelcome, profilePicture, _id, username } = response.data;
        setUserSettings({ userWishWelcome, profilePicture, _id, username });
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
      <div style={{ marginTop: "18vw" }}>
        <h1>ACCOUNT SETTINGS: </h1>

        <div className="form-check">

        </div>
      </div>
    )
  );
}
