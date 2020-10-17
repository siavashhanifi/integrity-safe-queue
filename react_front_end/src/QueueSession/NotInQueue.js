import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import You from './Queue/You';
import Queuee from './Queue/Queuee';
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  queueeList: {
    backgroundColor: blue,
  }
});

export default function NotInQueue(props) {
  const classes = useStyles();
  const userId = 1;

  const listNotInQueue = [];

  var queuee;

  for(queuee of props.queuees){
    if(queuee.id === userId && !queuee.inQueue){
        listNotInQueue.push(
            <Grid item>
              <You/>
            </Grid>
          );
        continue;
    }

    if (!queuee.inQueue)
    listNotInQueue.push(
      <Grid item>
          <Queuee inQueue={false}/>
      </Grid>
    );
  }

  return (
  <Grid
      container
      spacing={3}
      direction="row"
      alignItems="flex-start"
      justify="flex-start"
    >
              {listNotInQueue}
  </Grid>
  );
}
