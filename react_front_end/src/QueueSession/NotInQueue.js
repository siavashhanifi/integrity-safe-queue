import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import You from './Queue/You';
import Queuee from './Queue/Queuee';
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  queueeList: {
    backgroundColor: blue,
  }
});

export default function NotInQueue(props) {

  const listNotInQueue = [];

  for(var i = 1; i<= props.notInQueue.nONotInQueue; i++){
    if(i == props.notInQueue.yourPosition)
      listNotInQueue.push(
        <Grid item>
          <You/>
        </Grid>
      );
    else
      listNotInQueue.push(
        <Grid item>
            <Queuee inQueue={false}/>
        </Grid>
      );

  }

 
  return (
  <Grid
      container
      spacing={1}
      direction="row"
      alignItems="flex-start"
      justify="flex-start"
    >
    {listNotInQueue}
  </Grid>
  );
}
