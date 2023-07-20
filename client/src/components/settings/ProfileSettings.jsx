import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { userMenuOptions } from "../../userMenuOptions";
import { axiosClient } from "../../axiosClient";
import ProfilePictureUpload from './ProfilePictureUpload'
import ToggleWelcomeMessage from './ToggleWelcomeMessage'
export default function ProfileSettings() {
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
      
      })
      .catch((err) => console.error(err));
  }, []);

  

  return (
    userSettings && (
      <div
        style={{ marginTop: "10vw", padding: "2rem" }}
        className="pt-5 pt-md-3pt-xl-0"
      >
        <h1>PROFILE SETTINGS: </h1>

        <ToggleWelcomeMessage userInfo={userSettings}/>
        
        <h3>change Username</h3>
        <span>{userSettings.username}</span>
        <h3>manage Personal Information</h3>

       
        <ProfilePictureUpload userInfo={userSettings}/>
      </div>
    )
  );
}
