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
    <Box bgcolor="blue"></Box>
   /* <Grid
      container
      spacing={3}
      direction="column"
      alignItems="flex-start"
      justify="center"
    >

      <Grid item className={classes.queueeList} xs={12}>
      <Box height="100%">
        <Grid container>
          {listQueuees}
        </Grid>
      </Box>
      </Grid>

      <Grid item xs={12}>
          <Grid container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={2}
          >

            <Grid item xs={6}><Button color="primary" variant="contained">
                Join Queue
              </Button></Grid> 
              
            <Grid item xs={6}><Button color="secondary" variant="contained">
                Leave Queue
              </Button></Grid>

        </Grid>

      </Grid>

      <Grid item xs={12}> 
        <Box bgcolor="blue">
        <Typography>Not in queue:</Typography>
        <Grid container>{listNotInQueue}</Grid>
        </Box>
      </Grid>
    </Grid>*/
  );
}
