import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';
import Queue  from './Queue';
import Supervisors from './Supervisors';


const useStyles = makeStyles({
 box:{
     backgroundColor: "grey",
 }
    
});


export default function QueueSession() {
    const classes = useStyles();
    const sessionId = 1337;
    const queueState = {sessionId: 1337,
                        supervisors: [{ name: "Leif", isHelping: true }, { name: "Robert", isHelping: true }, { name: "Anders", isHelping: false }],
                        queuees: [{id: 4, inQueue: true}, {id:0, inQueue: false},{id:1, inQueue: true}, {id:2, inQueue: true}, {id:3, inQueue: false}]
                        }

    return ( 

        <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}>

            <Grid item xs={8}>
            <Box className={classes.box} height="90vh">
                <Typography h1>Queue:</Typography> 
                    <Queue queuees={queueState.queuees}/>
            </Box>
            </Grid>

            <Grid item xs={4}>
                <Box className={classes.box} height="90vh" >
                <Typography h1>Supervisors:</Typography>
                <Supervisors supervisors={queueState.supervisors}/>
                </Box>
            </Grid>

        </Grid>
    );
}