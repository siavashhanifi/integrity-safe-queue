import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Queue  from './Queue';
import Supervisors from './Supervisors';


const useStyles = makeStyles({
    
});


export default function QueueSession() {
    const classes = useStyles();
    const sessionId = 1337;
    const queueState = {sessionId: 1337,
                        supervisors: [{ name: "Leif", isHelping: true }],
                        queuees: [{id: 4, inQueue: true}, {id:0, inQueue: false},{id:1, inQueue: true}, {id:2, inQueue: true}, {id:3, inQueue: false}]
                        }

    return ( 
        <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center">
            <Grid item>
                <Typography h1>Queue Session: {sessionId}</Typography>
            </Grid>
            <Grid item>
                <Supervisors supervisors={queueState.supervisors}/>
            </Grid>
            <Grid item>
                <Queue queuees={queueState.queuees}/>
            </Grid>
        </Grid>
    );
}