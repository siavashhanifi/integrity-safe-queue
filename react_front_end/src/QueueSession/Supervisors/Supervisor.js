import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Person, SupervisedUserCircle } from "@material-ui/icons";

export default function Student(props) {
  const isHelping = props.isHelping;
  let supervisor;
  if (isHelping)
    supervisor = (
      <Grid container spacing={1}>
        <Grid item>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <SupervisedUserCircle fontSize="large" />
            </Grid>
            <Grid item>
              <Typography>{props.supervisorDetails.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>is helping</Typography>
        </Grid>
        <Grid item>
          <Person color="primary" />
        </Grid>
      </Grid>
    );
  else
    supervisor = (
      <Grid container spacing={1}>
        <Grid item>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <SupervisedUserCircle htmlColor="#4caf50" fontSize="large" />
            </Grid>
            <Grid item>
              <Typography>{props.supervisorDetails.name}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>is available</Typography>
        </Grid>
      </Grid>
    );
  return <Box></Box>;
}//<div>{supervisor}</div>
