import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import MenuIcon from "@mui/icons-material/Menu";

import StandardButton from "./StandardButton";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { axiosClient } from "../axiosClient";

import { cols } from "../colorSchema";

import { userMenuOptions } from "../userMenuOptions";

function Navbar({ userInfo, setUserInfo }) {
  const navigate = useNavigate();
  const params = useParams();
  console.log(useParams())

  const landing = (params)=>{
   
    if (params === "/"){
return true
    }else{
      return false
    }
  }
  

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutUser = (e) => {
    axiosClient
      .post(`http://localhost:3010/auth/logout`)
      .then((response) => {
        handleCloseUserMenu();
        setUserInfo("");
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosClient
      //.get(`http://localhost:3010/users/${params.username}`) //user route
      .get(`http://localhost:3010/auth/profile`) //auth route
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((err) => console.error(err));
  }, []);
//
//
//
//
  const settingsOptions = [
    {
      name: "Dashboard",
      linkTo: "",
      action: handleCloseUserMenu,

      iconOutlined: PersonIcon,
    },
    {
      name: "Profile",
      linkTo: "/settings/profile",
      action: handleCloseUserMenu,
      iconOutlined: ManageAccountsIcon,
    },
    {
      name: "Account",
      linkTo: "/settings/account",
      action: handleCloseUserMenu,
      iconOutlined: SettingsIcon,
    },
    {
      name: "Logout",
      linkTo: "/logout",
      action: logOutUser,
      iconOutlined: LogoutIcon,
    },
  ];
  return (
    <AppBar
      position="fixed"
      sx={{ height: "4rem", backgroundColor: cols.black, margin: "0" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href={userInfo && `/`}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "MONTSERRAT",
              fontWeight: 600,
              letterSpacing: ".5rem",
              color: cols.white,
              textDecoration: "none",
            }}
          >
            GRADBOOK
          </Typography>

          {/* ________---------______-------_______-------______------_____---- */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                height: "100vh",
                width:"120vw",
                display: { xs: "block", md: "none" },
              }}
            >
              {userMenuOptions.map((option) => (
                <Link
                  to={userInfo && `${option.linkTo}/${userInfo.username}`}
                  key={option.linkTo}
                  className="text-decoration-none"
                >
                  <MenuItem onClick={handleCloseNavMenu} style={{  fontSize: "2rem", justifyContent:"flex-start", marginTop: "1.8rem",color:cols.black}}>
                    <option.iconOutlined style={{  fontSize: "2rem" }}/>
                    <Typography textAlign="center"  style={{  fontSize: "2rem" }}>{option.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "montserrat",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: cols.white,
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: cols.white, display: "block" }}
            >
              HOME
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {landing && (
                  <Avatar
                    alt={userInfo && userInfo.username}
                    src={userInfo && userInfo.profilePicture}
                    sx={{ border: 1, borderColor: cols.white }}
                  />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {userInfo &&
                settingsOptions.map((option) => (
                  <Link
                    to={`${option.linkTo}/${userInfo.username}`}
                    key={option.linkTo}
                    className="text-decoration-none"
                  >
                    <MenuItem onClick={option.action} style={{  fontSize: "2rem", justifyContent:"flex-start", marginTop: "2rem",color:cols.black}}>
                    <option.iconOutlined style={{  fontSize: "2rem" }}/>
                    <Typography textAlign="center"  style={{  fontSize: "1.5rem" }}>{option.name}</Typography>

                    </MenuItem>
                  </Link>
                ))}

              {!userInfo && landing && (
                <MenuItem>
                  <Link to={`/login`}>
                    <LoginOutlinedIcon
                      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography textAlign="center">Login</Typography>
                  </Link>
                </MenuItem>
              )}
              {/* {!userInfo && !landing && (
                <MenuItem>
                  <Link to={`/login`}>
                    <LoginOutlinedIcon
                      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography textAlign="center">Login</Typography>
                  </Link>
                </MenuItem>
              )} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <div style={{ marginTop: "-5px", position: "relative", top: "0" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 113">
          <path
            fill={cols.black}
            fillOpacity="1"
            d="M 0,41.605039 C 133.77757,47.930195 166.58771,80.31574 250.63413,95.931249 360.57346,116.35756 480,118.37399 576,97.936362 672,77.305466 768,46.383279 864,51.553082 c 96,4.97654 195.2028,25.176304 291.2028,27.592104 96,2.41579 188.7972,-11.986063 236.7972,-30.201163 l 48,-18.021837 V 0 H 1392 1152 864 576 288 48 0 Z"
          />
        </svg>
      </div>
    </AppBar>
  );
}

export default Navbar;