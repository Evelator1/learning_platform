import { cols } from "../../colorSchema";
import Switch from "@mui/material/Switch";
import { Box } from "@mui/material";
import { axiosClient } from "../../axiosClient";

export default function ToggleWelcomeMessage({ userSettings }) {
  const sendPreferences = (e) => {
    const updatedUserSettings = {
      userWishWelcome: e.target.checked,
    };

    axiosClient
      .put(`http://localhost:3010/users/${userSettings._id}`, updatedUserSettings)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className="form-check-span m-3 w-100" style={{ color: cols.white }}>
      <h3> View welcome message on login</h3>
      <Switch
        defaultChecked={userSettings.userWishWelcome}
        onChange={sendPreferences}
      />
    </Box>
  );
}
