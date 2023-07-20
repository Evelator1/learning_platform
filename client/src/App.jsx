import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/NavbarAlternative";
import UserDashboard from "./components/dashboard/UserDashboard";
import WelcomeUserPage from "./components/dashboard/WelcomeUserPage";
import AccountSettings from "./components/settings/AccountSettings";
import ProfileSettings from "./components/settings/ProfileSettings";
import "bootstrap/dist/css/bootstrap.min.css";

import { axiosClient } from "./axiosClient";

function App() {
  const [userInfo, setUserInfo] = useState();

  console.log(userInfo)
  return (
    <>
      <Navbar userInfo={userInfo} setUserInfo={setUserInfo} />

      <Routes>
        <Route path="/login" element={<Login setUserInfo={setUserInfo} />}>
          {" "}
        </Route>
        {/* <Route path="/home" element={<Landing setUserInfo={setUserInfo} />}>
          {" "}
        </Route> */}
        <Route path="/signup" element={<Signup setUserInfo={setUserInfo} />}>
          {" "}
        </Route>
        <Route
          path="/welcome/:username"
          element={<WelcomeUserPage userInfo={userInfo} setUserInfo={setUserInfo}/>}
        >
          {" "}
        </Route>
        <Route
          path="/:username"
          element={
            <UserDashboard userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        >
          {" "}
        </Route>
        <Route
          path="/settings/account/:username"
          element={
            <AccountSettings userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        >
          {" "}
        </Route>
        <Route
          path="/settings/profile/:username"
          element={
            <ProfileSettings userInfo={userInfo} setUserInfo={setUserInfo} />
          }
        >
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
