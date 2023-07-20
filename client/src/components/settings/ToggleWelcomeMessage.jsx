import { cols } from "../../colorSchema";
import Switch from "@mui/material/Switch";
import { axiosClient } from "../../axiosClient";

export default function ToggleWelcomeMessage({userInfo}) {

    const sendPreferences = (e) => {
        const updatedUserInfo = {
          userWishWelcome: e.target.checked,
        };
    
        axiosClient
          .put(`http://localhost:3010/users/${userInfo._id}`, updatedUserInfo)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (


    <span className="form-check-span " style={{ color: cols.black }}>
          <h3> View welcome message on login</h3>
          <Switch defaultChecked={userInfo.userWishWelcome} onChange={sendPreferences} />
        </span>
  )
}
