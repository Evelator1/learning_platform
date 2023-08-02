import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { axiosClient } from "../../axiosClient";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleWelcomeMessage from "./ToggleWelcomeMessage";
import UsernameManager from "./UsernameManager";
import BootcampInfoManager from "./BootcampInfoManager";
import PersonalInfoManager from "./PersonalInfoManager";
import ProfilePictureManager from "./ProfilePictureManager";
import { cols } from "../../colorSchema";
import CityManager from "./CityManager";
export default function ProfileSettings() {
  const [userSettings, setUserSettings] = useState();
  useEffect(() => {
    
    axiosClient
      .get(`/auth/profile`) //auth route
      .then((response) => {
        const {
          userWishWelcome,
          profilePicture,
          _id,
          username,
          email,
          personalInfo,
          bootcamp,
          city,
        } = response.data;

        setUserSettings({
          userWishWelcome,
          profilePicture,
          _id,
          username,
          email,
          personalInfo,
          bootcamp,
          city,
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
          <BootcampInfoManager userSettings={userSettings} />
          <CityManager userSettings={userSettings} />
          <ProfilePictureManager userSettings={userSettings} />
      </Container>
    )
  );
}
