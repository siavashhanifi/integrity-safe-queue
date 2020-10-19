import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'

export default function Queuee(props){
const inQueue = props.inQueue;
let queuee;
if(inQueue)
 queuee = (<Grid container
direction="column"
justify="center"
alignItem="center"
spacing={0}
>
    <Grid item>
      <Person color="primary" fontSize="large" />
    </Grid>

    <Grid item style={{margin: '0 auto'}}>
       <Typography variant="caption">{props.number}</Typography>
     </Grid>
 </Grid>
 );
else
 queuee = <Person color="error" fontSize="large" />
return( 
<div>
  {queuee}
</div>
);

}