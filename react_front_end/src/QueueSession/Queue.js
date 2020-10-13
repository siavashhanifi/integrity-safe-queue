import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import You from './Queue/You';
import Queuee from './Queue/Queuee';

const useStyles = makeStyles({});

export default function Queue(props) {
  const classes = useStyles();
  const userId = 1;

  const listNotInQueue = [];
  const listQueuees = [];
  var queuee;

  for(queuee of props.queuees){
    if (!queuee.inQueue)
    listNotInQueue.push(
      <Grid item>
          <Queuee inQueue={false}/>
      </Grid>
    );
    else{
        if (queuee.id === userId)
          listQueuees.push(
            <Grid item>
              <You/>
            </Grid>
          );
        else
          listQueuees.push(
            <Grid item>
                <Queuee inQueue={true}/>
            </Grid>
          );
      }
  }

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item>Queue:</Grid>
      <Grid item>
        <Grid container>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography>First</Typography>
              </Grid>
              <Grid item>
                <ArrowForward />
              </Grid>
            </Grid>
          </Grid>
          {listQueuees}
        </Grid>
      </Grid>
      <Grid item>Not in queue:</Grid>
      <Grid item>
        <Grid container>{listNotInQueue}</Grid>
      </Grid>
    </Grid>
  );
}
