import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { borders } from "@mui/system";
import StandardButton from "../StandardButton";

export default function UserBadge({ userInfo }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: "15rem", position: "fixed" }}>
      <CardMedia
        component="img"
        height="240"
        image={userInfo.profilePicture}
        alt={userInfo.username}
      />
      <CardContent>
        <Typography variant="h5" component="div" className="p-0">
          {userInfo.username}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="my-4">
          {userInfo.info ? userInfo.info : "Tell something about you"}
        </Typography>
     
        <StandardButton link={`/settings/account/${userInfo.username}`} w={100} content={"settings"}/>
      </CardContent>
    </Card>
  );
}
