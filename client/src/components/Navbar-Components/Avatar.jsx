import React from "react";


export default function Avatar({user}) {


  return (
    <div >
      <img
        src={user.profilePicture}
        className="rounded-circle shadow-4"
        style={{width: "3rem", height:"auto",aspectRatio:"1/1", objectFit: "cover" }}
        alt={user.username}
      />
     
    </div>
  );
}

