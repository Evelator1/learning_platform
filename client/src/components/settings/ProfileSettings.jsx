import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { axiosClient } from "../../axiosClient";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePictureManager from "./ProfilePictureManager";
import ToggleWelcomeMessage from "./ToggleWelcomeMessage";
import UsernameManager from "./UsernameManager";
import PersonalInfoManager from "./PersonalInfoManager";
import { cols } from "../../colorSchema";
export default function ProfileSettings() {
  const [userSettings, setUserSettings] = useState();
  useEffect(() => {
    axiosClient
      .get(`http://localhost:3010/api/auth/profile`) //auth route
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
      <Container style={{color:cols.white, width:"70%"}}>
      
          <h1>PROFILE SETTINGS: </h1>
          <ToggleWelcomeMessage userSettings={userSettings} />
          <UsernameManager userSettings={userSettings} />
          <PersonalInfoManager userSettings={userSettings} />
          <ProfilePictureManager userSettings={userSettings} />
      </Container>
    )
  );
}
