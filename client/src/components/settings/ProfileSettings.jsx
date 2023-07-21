import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { axiosClient } from "../../axiosClient";
import ProfilePictureManager from "./ProfilePictureManager";
import ToggleWelcomeMessage from "./ToggleWelcomeMessage";
import UsernameManager from "./UsernameManager";
import PersonalInfoManager from "./PersonalInfoManager";

export default function ProfileSettings() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const params = useParams();
  const [userSettings, setUserSettings] = useState();
  useEffect(() => {
    axiosClient
      // .get(`http://localhost:3010/users/${params.username}`) //user route
      .get(`http://localhost:3010/auth/profile`) //auth route
      .then((response) => {
        const {
          userWishWelcome,
          profilePicture,
          _id,
          username,
          email,
          personalInfo,
        } = response.data;
        setUserSettings({
          userWishWelcome,
          profilePicture,
          _id,
          username,
          email,
          personalInfo,
        });
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(userSettings);
  return (
    userSettings && (
      <div
        style={{ marginTop: "10vw", padding: "2rem", display:"flex", flexDirection:"column" ,alignItems:"center" }}
        className="pt-5 pt-md-3pt-xl-0"
      >
        <h1>PROFILE SETTINGS: </h1>

        <ToggleWelcomeMessage userInfo={userSettings} />
        <UsernameManager userInfo={userSettings} />
        <PersonalInfoManager userInfo={userSettings} />
        <ProfilePictureManager userInfo={userSettings} />
      </div>
    )
  );
}
