// import "./App.css";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import UserDashboard from "./components/UserDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/Navbar";
import WelcomePage from "./LAP01-Welcome";
import CardsPage from "./LAP02-Cards";
import UserFeedbackPage from "./LAP04-UserFeedback";
import AboutUsPage from "./LAP05-AboutUs";
import "./landingPage.css";
// import Navbar from "./components/LandingPage/Navbar";

function LandingPage() {
  return (
    <>
      <WelcomePage />
      <CardsPage />

      <UserFeedbackPage />
      <AboutUsPage />
    </>
  );
}

export default LandingPage;
