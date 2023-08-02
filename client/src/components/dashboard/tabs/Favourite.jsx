import React from "react";
import screenshot3 from "../../../assets/pics/screenshot_3.jpg";
import screenshot2 from "../../../assets/pics/screenshot_2.jpg";

export default function Favourite() {
  return (
    <div className="col-12 mt-5 d-flex flex-column justify-content-center align-items-center">
      <img
        src={screenshot3}
        alt="post"
        style={{ width: "50rem", marginTop: "1rem" }}
      />
      <img src={screenshot2} alt="post" style={{ width: "50rem" }} />
    </div>
  );
}
