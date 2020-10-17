import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core';
import Queue  from './Queue';
import Supervisors from './Supervisors';


const useStyles = makeStyles((theme) => ({
buttons: {
        '& > *': {
          margin: theme.spacing(1),
        },
},
 content:{
    flexGrow: 1,
   
 },
}));


export default function QueueSession() {
    const classes = useStyles();
    const sessionId = 1337;
    const queueState = {sessionId: 1337,
                        supervisors: [{ name: "Leif", isHelping: true }, { name: "Robert", isHelping: true }, { name: "Anders", isHelping: false }],
                        queuees: [{id: 4, inQueue: true}, {id:0, inQueue: false},{id:1, inQueue: true}, {id:2, inQueue: true}, {id:3, inQueue: false}]
                        }

    return (
       <Grid container
            spacing={1}
            className={classes.content}
            alignItems="center"
            justify="center"
       >
           <Grid item xs={8}> 
                <Paper bgcolor="red" style={{height:"50vh", backgroundColor: 'blue'}} padding={3} >
                    <Typography>Queue</Typography>
                </Paper>
           </Grid>

           <Grid item xs={4}>
                <Box bgcolor="blue" height="50vh" padding={3}>
                    <Typography>Supervisors</Typography>
                </Box>
           </Grid>

           <Grid item xs={12}>
                <Box bgcolor="green" height="10vh" className={classes.buttons}>
                
                    <Button color="primary" variant="contained" size="large">Join Queue</Button>
                    <Button color="secondary" variant="contained" size="large">Leave Queue</Button>
                    <Button color="secondary" variant="contained" size="large">Leave Session</Button>

                </Box>
           </Grid>

           <Grid item xs={12}>
           <Box bgcolor="yellow" height="30vh" padding={3}>
               <Typography>Not in queue</Typography>
           </Box>
           </Grid>

       </Grid>
    );
}