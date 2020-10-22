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

export default function Queue(props) {
  const listQueuees = [];

  for(var i = 1; i<= props.queuees.nOQueuees; i++){
    if(i == props.queuees.yourPosition)
      listQueuees.push(
        <Grid item>
          <You/>
        </Grid>
      );
    else
      listQueuees.push(
        <Grid item>
            <Queuee inQueue={true} number={i}/>
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
    {listQueuees}
  </Grid>
  );
}
