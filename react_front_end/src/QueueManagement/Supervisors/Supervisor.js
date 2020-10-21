import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Person, SupervisedUserCircle } from "@material-ui/icons";

export default function Student(props) {
  const isHelping = props.isHelping;
  let supervisor;
  if (isHelping)
    supervisor = (
      <Box>
        <SupervisedUserCircle fontSize="large" />
        <Typography variant="caption" >{props.supervisorDetails.name}(busy)</Typography>
      </Box>
    );
  else
    supervisor = (
      <Box>
        <SupervisedUserCircle htmlColor="#4caf50" fontSize="large" />
        <Typography variant="caption" >{props.supervisorDetails.name}(available)</Typography>
      </Box>
    );
  return <div>{supervisor}</div>;
}//
