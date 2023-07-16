import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import UserDashboard from "./components/UserDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
import WelcomePage from "./components/LandingPage/LAP01-Welcome";
import CardsPage from "./components/LandingPage/LAP02-Cards";
import JunglePage from "./components/LandingPage/LAP03-Jungle";
import UserFeedbackPage from "./components/LandingPage/LAP04-UserFeedback";
import AboutUsPage from "./components/LandingPage/LAP05-AboutUs";

function App() {
  return (
    <>
      <WelcomePage />
      <CardsPage />
      <JunglePage />
      <UserFeedbackPage />
      <AboutUsPage />
    </>

    // {/* <Routes>
    //   <Route path="/" element={<WelcomePage />}></Route>
    //   {/* <Route path="/login" element={<Login />}>
    //     {" "}
    //   </Route>
    //   <Route path="/signup" element={<Signup />}>
    //     {" "}
    //   </Route>
    //   <Route path="/dashboard/:id" element={<UserDashboard />}>
    //     {" "}
    //   </Route> */}
    // </Routes> */}
  );
}

export default App;
