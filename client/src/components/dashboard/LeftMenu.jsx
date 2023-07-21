import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userMenuOptions } from "../../userMenuOptions";
import { cols } from "../../colorSchema";
import { Box, Typography } from "@mui/material";

export default function LeftMenu({ userInfo }) {
  const [isMobile, setIsMobile] = useState(false);

  const hoverStyle = {
    textDecoration: "none",
    color: cols.black,
    "&:hover": {
      color: cols.white,
      backgroundColor: cols.black,
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize(); // Check initial width

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return null; // Return null to hide the component on mobile screens
  }

  return (
    <div className="col mt-4 position-fixed container-fluid vh-100 d-flex-column justify-content-center align-items-center">
      <div>
        {userMenuOptions.map((option) => (
          <div
            key={option.name}
            className="col-3 my-2 p-0 rounded-1 text-light  color-dark d-flex justify-content-center align-items-center"
            style={{ width: "3rem" }}
          >
            <Box
              sx={{
                minWidth: 180,
                width: "90%",
                marginX: "3rem",
                borderRadius: "1rem",
              }}
            >
              <Link
                to={`${option.linkTo}/${userInfo.username}`}
                className="text-decoration-none"
              >
                {" "}
                <Box
                  className="d-flex-column align-items-center justify-content-center text-center "
                  style={{
                    padding: "0.5em",
                  }}
                  sx={hoverStyle}
                >
                  <option.iconOutlined className="fs-1"/>
                  <Typography variant="h6">{option.name}</Typography>
                </Box>
              </Link>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}
