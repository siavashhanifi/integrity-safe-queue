import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { PersonPinCircle } from '@material-ui/icons'


export default function You(){

return(<Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
  >
    <Grid item>
      <PersonPinCircle fontSize="large" color="secondary" />
    </Grid>
    <Grid item>
      <Typography variant="caption" color="secondary">
        You
      </Typography>
    </Grid>
  </Grid>);

}