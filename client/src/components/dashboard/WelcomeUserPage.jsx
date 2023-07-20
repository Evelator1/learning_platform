import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import { axiosClient } from "../../axiosClient";
import { Box } from "@mui/material";

export default function WelcomeUserPage({ userInfo, setUserInfo }) {

  const sendPreferences = (e) => {
    const updatedUserInfo = {
      userWishWelcome: e.target.checked,
    };
    userInfo &&
      axiosClient
        .put(`http://localhost:3010/users/${userInfo.id}`, updatedUserInfo)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    userInfo && (
      <div
        className="my-lg-5 my-sm-0 position-fixed overflow-auto container-fluid vh-100 overflow-scroll d-flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: cols.white,
          paddingTop: "9vw",
          paddingBottom: "5rem",
        }}
      >
        <h1
          className="fs-1 mt-5 p-0
       text-center"
          style={{ color: cols.white }}
        >
          Welcome {userInfo.username}!
        </h1>
        <div className="w-100 p-0  d-flex-column justify-content-center align-items-center">
          <div className="row d-flex justify-content-around">
            {userMenuOptions.map((option) => (
              <div
                key={option.name}
                className="col-3 my-4 p-0 rounded-1 text-light  color-dark d-flex justify-content-center align-items-center"
              >
                <Box
                  sx={{
                    width: "15rem",
                    minHeight: "12rem",
                    marginX: "3rem",
                    borderRadius: "0.5rem",
                    bgColor: cols.lila,
                    "&:hover": {
                      backgroundColor: cols.pink,
                      width: "16rem",
                      color: cols.white
                    },
                  }}
                >
                  <Link
                    to={`${option.linkTo}/${userInfo.username}`}
                    className="text-decoration-none"
                  >
                    {" "}
                    <Box
                      className="d-flex-column align-items-center justify-content-center text-center "
                      style={{ color: cols.black }}
                    >
                      <option.iconOutlined
                        style={{ color: cols.black, fontSize: "6rem", justifyContent:"center" }}
                      />
                      <h4>{option.name}</h4>
                    </Box>
                  </Link>
                </Box>
              </div>
            ))}
            <div className="form-check">
              <input
                type="checkbox"
                onChange={sendPreferences}
                defaultChecked={userInfo.userWishWelcome}
              />
              <span className="form-check-span " style={{ color: cols.white }}>
                {" "}
                View welcome message on login
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
