import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core';
import Queue  from './Queue';
import Supervisors from './Supervisors';
import NotInQueue from './NotInQueue';


const useStyles = makeStyles((theme) => ({
infoBox: {
        '& > *': {
          margin: theme.spacing(1),
        },
},
supervisorsBox: {
    width: '100%',
    height: '90%',
    overflowY: 'scroll',
    overflowX: 'hidden'
},
buttons: {
    width: '50vw',
    margin: '0 auto',
        '& > *': {
          margin: theme.spacing(1),
        },
},
 content:{
    flexGrow: 1,
    backgroundColor: 'blue',
    height:'100vh',
    width: '100vw',
    margin:'0 auto',
 },
}));


export default function QueueSession() {
    const classes = useStyles();
    const sessionId = 1337;
    const queueState = {sessionId: 1337,
                        supervisors: [{ name: "Leif", isHelping: true }, { name: "Robert", isHelping: true }, { name: "Anders", isHelping: false }],
                        queuees: [{id: 4, inQueue: true}, {id:0, inQueue: false},{id:1, inQueue: true}, {id:2, inQueue: true}, {id:3, inQueue: false}],
                        peopleInQueue: 3,
                    }

    return (
       <Grid container
            spacing={1}
            className={classes.content}
            alignItems="center"
            justify="center"
       >
           <Grid item xs={6}> 
                <Box bgcolor="beige" height="50vh" padding={3} >
                    <Typography>Queue:</Typography>
                    <Queue queuees={queueState.queuees}/>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="beige" height="50vh" padding={3} >
                    <Typography>Supervisors</Typography>
                    <Box className={classes.supervisorsBox}>
                        <Supervisors supervisors={queueState.supervisors}/>
                    </Box>
                </Box>
           </Grid>

           <Grid item xs={12}>
                <Box className={classes.buttons}>
                    <Button color="primary" variant="contained" size="large">Join Queue</Button>
                    <Button color="secondary" variant="contained" size="large">Leave Queue</Button>
                    <Button color="secondary" variant="contained" size="large">Leave Session</Button>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="beige" height="30vh" padding={3}>
                    <Typography>Not in queue:</Typography>
                    <NotInQueue queuees={queueState.queuees}/>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="beige" height="30vh" padding={3} textAlign='left' className={classes.infoBox}>
                    <Typography>Session Info:</Typography>
                    <Typography display='inline'>Queue session: {queueState.sessionId}</Typography>
                    <Typography display='inline'>Persons in Queue: {queueState.peopleInQueue}</Typography>
                    <Typography display='inline'>Number of Supervisors: {queueState.supervisors.length}</Typography>
                </Box>
           </Grid>

       </Grid>
    );
}