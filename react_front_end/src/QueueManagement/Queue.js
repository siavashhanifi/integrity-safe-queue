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

export default function Queue(props) {
  const classes = useStyles();
  const userId = 1;

  const listNotInQueue = [];
  const listQueuees = [];
  var queuee;
  var index = 1;
  for(queuee of props.queuees){
    if (!queuee.inQueue)
    listNotInQueue.push(
      <Grid item>
          <Queuee inQueue={false} />
      </Grid>
    );
    else{
        if (queuee.id === userId){
          listQueuees.push(
            <Grid item>
              <You/>
            </Grid>
          );
          index++;
        }
        else
          listQueuees.push(
            <Grid item>
                <Queuee inQueue={true} number={index++}/>
            </Grid>
          );
      }
  }

  return (
  <Grid
      container
      spacing={1}
      direction="row"
      alignItems="flex-start"
      justify="flex-start"
    >
              {listQueuees}
  </Grid>
  );
}
