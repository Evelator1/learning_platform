import { useEffect } from "react";
import { axiosClient } from "../axiosClient";
import { useNavigate } from "react-router-dom";
export default function LogoutMessage() {

const navigate = useNavigate()
  useEffect(() => {
    axiosClient
    .post("http://localhost:3010/auth/logout")
    .then((response) => {
      if ((response.status = 200)) {
        navigate(`/`);
        console.log("User Logout, success!", response.data);

      } else {
        console.log("error Logging out");
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <div>Logout</div>
  )
}
