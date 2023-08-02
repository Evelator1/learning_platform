import React from "react";
import screenshot1 from "../../../assets/pics/screenshot_1.jpg";

export default function Favourite() {
  return (
    <div className="col-12 mt-5 d-flex flex-column justify-content-center align-items-center">
      <img
        src={screenshot1}
        alt="post"
        style={{ width: "50rem", marginTop: "1rem" }}
      />
      <img src={screenshot1} alt="post" style={{ width: "50rem" }} />
      <img src={screenshot1} alt="post" style={{ width: "50rem" }} />
    </div>
  );
}
