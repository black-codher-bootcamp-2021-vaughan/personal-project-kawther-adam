import { AccessTime } from "@mui/icons-material";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Card(props) {
  const { profile } = props;

  return (
    <Paper elevation={3} className="paper">
      <Box>
      
        {profile.pictures.map((picture) => (
          <img src={picture.url} width="200px" />
        ))}
      </Box>
      <Box
        sx={{
          paddingX: 1,
        }}
      >
        <Typography variant="subtitle1" component="h2">
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
