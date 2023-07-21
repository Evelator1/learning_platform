import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import { axiosClient } from "../../axiosClient";
import { Box, Typography, Switch } from "@mui/material";
import ToggleWelcomeMessage from "../settings/ToggleWelcomeMessage";
const label = { inputProps: { "aria-label": "View at Login" } };

export default function WelcomeUserPage({ userInfo, setUserInfo }) {
  const hoverStyle = {
    textDecoration: "none",
    color: cols.black,
    "&:hover": {
      color: cols.white,
      backgroundColor: cols.black,
      borderRadius:"2rem"
    },
  };

  

  return (
    userInfo && (
      <div
        className="my-lg-5 my-sm-0 position-fixed overflow-auto container-fluid vh-100 overflow-scroll d-flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: cols.white,
          paddingTop: "8vw",
          paddingBottom: "5rem",
        }}
      >
        <h1
          className="fs-1 mt-2 
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
                className="col-3 my-5 py-4 rounded-1 text-light  color-dark d-flex justify-content-center align-items-center"
              >
                <Box
                  sx={{
                    width: "15rem",
                    minHeight: "12rem",
                    marginX: "2rem",
                    
                  }}
                >
                  <Link
                    to={`${option.linkTo}/${userInfo.username}`}
                    className="text-decoration-none"
                  >
                    {" "}
                    <Box
                      className="py-3 d-flex-column align-items-center justify-content-center text-center "
                      sx={hoverStyle}
                    >
                      <option.iconOutlined
                        style={{  fontSize: "6rem", justifyContent:"center" }}
                      />
                  <Typography variant="h6">{option.name}</Typography>
                    </Box>
                  </Link>
                </Box>
              </div>
            ))}
           
                  <ToggleWelcomeMessage userInfo={userInfo}/>

          </div>
        </div>
      </div>
    )
  );
}
