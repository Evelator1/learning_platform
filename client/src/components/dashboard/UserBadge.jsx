import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import StandardButton from "../StandardButton";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material";
import {cols} from '../../colorSchema'

export default function UserBadge({ userInfo }) {
  const navigate = useNavigate();
  console.log(userInfo)

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: "15rem", position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image={userInfo.profilePicture}
          alt={userInfo.username}
        />
        <CardContent>
          <Typography variant="h6" component="div" className="p-0">
            {userInfo.username}
          </Typography>
          <Typography variant="p" color={cols.black} className="my-4">
            {userInfo.personalInfo}
             
          </Typography>

          <StandardButton
            link={`/settings/profile/${userInfo.username}`}
            w={100}
            content={"settings"}
          />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
