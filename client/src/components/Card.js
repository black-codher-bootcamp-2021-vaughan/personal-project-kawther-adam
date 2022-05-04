import { AccessTime } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Card(props) {
  const { profile } = props;

  return (
    <Paper
      elevation={6}
      className="paper"
      style={{
        // height: 200,
        color: "black",
        marginTop: "10px",
        borderRadius: 40,
        overflow: "hidden",
        backgroundColor: "#white",
      }}
    >
      {profile.pictures.map((picture) => (
        <img src={picture.url} width="600px" />
      ))}
    
      <Box
        sx={{
          paddingX: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          component="h3"
          style={{
            fontFamily: "Helvetica Neue",
            fontWeight: 100,
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {profile.Name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AccessTime style={{ width: 12.5 }} />
          <Typography variant="body2" component="p" marginLeft={0.5}>
            {profile.Description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          marginTop={3}
        ></Box>
      </Box>
    </Paper>
  );
}

export default Card;
