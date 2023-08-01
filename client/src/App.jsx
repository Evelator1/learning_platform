import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavbarBS from "./components/Navbar-Components/NavbarBS";
import Protected from "./components/Protected";
import Profile from "./components/Profile";
import WelcomeUserPage from "./components/dashboard/WelcomeUserPage";

import UserSettings from "./components/settings/Settings";
import PostsFeedTab from "./components/dashboard/tabs/userfeed/PostsFeedTab";
import InterviewQuestionsDashboard from "./components/interviewQuestions/InterviewQuestionsDashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

import LearningCardsTab from "./components/dashboard/tabs/LearningCards/LearningCardsTab";
import InterviewQuestionsTab from "./components/dashboard/tabs/InterviewQuestionsTab";
import JobSearchTab from "./components/dashboard/tabs/JobSearch/JobSearchTab";
import ShareReviewsTab from "./components/dashboard/tabs/review/ShareReviewsTab";
import ChatTab from "./components/dashboard/tabs/ChatTab";
import NextStepsTab from "./components/dashboard/tabs/NextStepsTab";
import Favourite from "./components/dashboard/tabs/Favourite";
import LogoutMessage from "./components/LogoutMessage";

import LearningCardList from "./components/dashboard/tabs/LearningCards/LearningCardList";
import NewLearningCard from "./components/dashboard/tabs/LearningCards/NewLearningCard";

function App() {
  const { user, isLoading } = useContext(AuthContext);

  return (
    <>
      <NavbarBS />

      <Routes>
        <Route path="/welcome/:username" element={<WelcomeUserPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/logout" element={<LogoutMessage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>

        <Route path="/:username" element={<Protected />}>
          <Route index element={<Profile />} />
          <Route path="feed" element={<PostsFeedTab />} />

          {/* <Route path="learning-cards" element={<LearningCardsTab />} /> */}
          <Route path="learning-cards" element={<LearningCardList />} />
          <Route path="learning-cards/createlearningcard" element={<NewLearningCard />}   />
          <Route path="interview-questions" element={<InterviewQuestionsTab />}   />
          <Route path="job-search" element={<JobSearchTab />} />
          <Route path="reviews" element={<ShareReviewsTab />} />
          <Route path="favourites" element={<Favourite />} />
          <Route path="settings" element={<UserSettings />} />
          {/* <Route path="next-steps" element={<NextStepsTab />} /> */}
          {/* <Route path="connect" element={<ChatTab />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
