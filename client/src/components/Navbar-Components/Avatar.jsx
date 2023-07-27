import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider.jsx";


export default function Avatar() {

  const {  isLoading, user } = useContext(AuthContext);

  return user&&(
    <div >
      <img
        src={user.profilePicture}
        className="rounded-circle shadow-4"
        style={{width: "3rem", height:"auto",aspectRatio:"1/1", objectFit: "cover" }}
        alt={user.username}
      />
      {"   "}
      {user.username}
    </div>
  );
}

