import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core';
import Queue  from './Queue';
import Supervisors from './Supervisors';
import NotInQueue from './NotInQueue';
import { queueState } from '../DUMMY_DATA/queue-state';
import AlertDialog from './AlertDialog';


const useStyles = makeStyles((theme) => ({
infoBox: {
        '& > *': {
          margin: theme.spacing(1),
        },
},
supervisorsBox: {
    width: '100%',
    height: '90%',
    overflow: 'auto'
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
    backgroundColor: '#50055E',
    height:'100vh',
    width: '100vw',
    margin:'0 auto',
 },
}));


export default function QueueSession() {
    const classes = useStyles();

    const [alertDialogOpen, alertDialogSetOpen] = React.useState(false);
    const [alertDialogAction, setAlertDialogAction] = React.useState('');

    const handleJoinQueue = (event) => {
            //tell backend queuee joined queue
    }

    const handleLeaveQueue = (event) => {
        setAlertDialogAction('LEAVE_QUEUE');
        alertDialogSetOpen(true);
    }

    const handleLeaveSession = (event) => {
        setAlertDialogAction('LEAVE_SESSION');
        alertDialogSetOpen(true);
    }


    return (

       <Grid container
            spacing={1}
            className={classes.content}
            alignItems="center"
            justify="center"
       >
           <AlertDialog action={alertDialogAction} open={alertDialogOpen} setOpen={alertDialogSetOpen}/>

           <Grid item xs={6}> 
                <Box bgcolor="white" height="50vh" padding={3} borderRadius={15} >
                    <Typography>Queue:</Typography>
                    <Queue queuees={queueState.queuees}/>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="50vh" padding={3} borderRadius={15}>
                    <Typography>Supervisors:</Typography>
                    <Box className={classes.supervisorsBox}>
                        <Supervisors supervisors={queueState.supervisors}/>
                    </Box>
                </Box>
           </Grid>

           <Grid item xs={12}>
                <Box className={classes.buttons}>
                    <Button color="primary" variant="contained" size="large" onClick={handleJoinQueue}>Join Queue</Button>
                    <Button color="secondary" variant="contained" size="large" onClick={handleLeaveQueue}>Leave Queue</Button>
                    <Button color="secondary" variant="contained" size="large" onClick={handleLeaveSession}>Leave Session</Button>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="30vh" padding={3} borderRadius={15}>
                    <Typography>Not in queue:</Typography>
                    <NotInQueue notInQueue={queueState.notInQueue}/>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="30vh" padding={3} textAlign='left' className={classes.infoBox} borderRadius={15}>
                    <Typography>Session Info:</Typography>
                    <Typography display='inline'>Queue session: {queueState.sessionId}</Typography>
                    <Typography display='inline'>Persons in Queue: {queueState.queuees.nOQueuees}</Typography>
                    <Typography display='inline'>Number of Supervisors: {queueState.supervisors.length}</Typography>
                </Box>
           </Grid>

       </Grid>
    );
}