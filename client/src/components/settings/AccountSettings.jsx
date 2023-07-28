import StandardButton from "../StandardButton";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cols } from "../../colorSchema";
import { axiosClient } from "../../axiosClient";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

// const label = { inputProps: { "aria-label": "Switch demo" } };

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AccountSettings() {
  const { user} = useContext(AuthContext);
  console.log(user);
  return (
    user && (
      <div style={{  }}>
        <h1>ACCOUNT SETTINGS: </h1>
        <ChangeEmail />

        <ChangePassword />
      </div>
    )
  );
}
