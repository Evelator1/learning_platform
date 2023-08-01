import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Avatar({ user }) {
  return (
    <div>
      <img
        src={user.profilePicture}
        className="rounded-circle shadow-4 border border-1 border-white"
        style={{
          width: "3rem",
          height: "auto",
          aspectRatio: "1/1",
          objectFit: "cover",
        }}
        alt={user.username}
      />
    </div>
  );
}
