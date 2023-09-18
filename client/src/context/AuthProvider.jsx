import { createContext, useState, useEffect } from "react";
import { axiosClient } from "../axiosClient";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  ///////// IMPORTANT!
  ////////this is setting the user Profile data only if the cookies are valid.
  /////////
  useEffect(() => {
    axiosClient
      .get("/auth/profile")
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setUser(null);
        setIsLoading(false);
        console.log(err);
      });
  }, [user]);

  const login = (data) => {
    axiosClient
      .post("/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if ((response.status = 200)) {
          const returnedInfo = response.data;
          setUser(returnedInfo);
          setIsLoading(false);

          console.log(
            "authentication complete, Welcome",
            returnedInfo.username
          );

          returnedInfo.userWishWelcome
            ? navigate(`/welcome/${returnedInfo.username}`)
            : navigate(`/${returnedInfo.username}/feed`);
        } else {
          console.log("error at Login");
          navigate(`/login`);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const signup = (data) => {
    axiosClient
      .post("/auth/signup", {
        username: data.username,
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if ((response.status = 200)) {
          setUser(response.data);
          setIsLoading(false);

          console.log("Registation Complete, Welcome", response.data.username);
          navigate(`/welcome/${response.data.username}`);
        } else {
          console.log("error at Signup");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  const changeEmail = (data) => {
    axiosClient
      .patch(`/auth/edit-email/${user._id}`, {
        newEmail: data.newEmail,
        password: data.password,
      })
      .then((response) => {
        if ((response.status = 200)) {
          setUser(response.data);

          console.log(
            "Email Changed Successfully! new email:",
            response.data.email
          );
          // navigate(`/welcome/${response.data.username}`);
        } else {
          console.log("error at Signup");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logout = () => {
    axiosClient
      .post("/auth/logout")
      .then((response) => {
        setUser(null);
        navigate(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, signup, changeEmail, user, setUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
