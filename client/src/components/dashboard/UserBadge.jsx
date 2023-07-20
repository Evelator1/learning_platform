import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { cols } from "../../colorSchema";
import { borders } from '@mui/system';


export default function UserBadge({ userInfo }) {
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
          {userInfo.info?userInfo.info:"Tell something about you"}
        </Typography>
        <Button style={{ backgroundColor: cols.blue, color: cols.white }}>
          Profile Settings
        </Button>
      </CardContent>
    </Card>
  );
}
