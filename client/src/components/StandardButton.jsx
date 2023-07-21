import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { cols } from "../colorSchema";
import { Link } from "react-router-dom";

export default function StandardButton({ w, content, link }) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // This centers the text vertically
          width: w,
          backgroundColor: cols.white,
          color: cols.black,
          marginTop: 3,
          borderRadius: "0.5rem", // Add rounded corners here
          "&:hover": {
            backgroundColor: cols.black,
            color: cols.white,
          },
        }}
      >
        <Link to={link} style={{ textDecoration: 'none'  }}>
          <Typography variant="h6">{content}</Typography>
        </Link>
      </Box>
    );
  }
  