import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core';
import Queue  from './Queue';
import Supervisors from './Supervisors';
import NotInQueue from './NotInQueue';
//import { queueState } from '../DUMMY_DATA/queue-state';
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


export default function QueueSession(props) {
    const classes = useStyles();
    const queueState = props.queueState;
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
                    <Typography align="center" variant="overline" >Queue:</Typography>
                    <Queue queuees={queueState.queuees}/>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="50vh" padding={3} borderRadius={15}>
                    <Typography variant="overline">Supervisors:</Typography>
                    <Box className={classes.supervisorsBox}>
                        <Supervisors supervisors={queueState.supervisors}/>
                    </Box>
                </Box>
           </Grid>

           <Grid container item xs={12} direction="column" justify="center" alignItems="center" spacing={0}>
                <Box className={classes.buttons}>
                    <Button color="primary" variant="contained" size="large" onClick={handleJoinQueue}>Join Queue</Button>
                    <Button color="secondary" variant="contained" size="large" onClick={handleLeaveQueue}>Leave Queue</Button>
                    <Button color="secondary" variant="contained" size="large" onClick={handleLeaveSession}>Leave Session</Button>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="30vh" padding={3} borderRadius={15}>
                    <Typography variant="overline">Not in queue:</Typography>
                    <NotInQueue notInQueue={queueState.notInQueue}/>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="30vh" padding={3} textAlign='left' className={classes.infoBox} borderRadius={15}>
                    <Typography variant="overline">Session Info:</Typography>
                    <Box>
                        <Grid container direction="column" wrap>
                            <Grid item><Typography display='inline' variant="overline">Queue session: {queueState.sessionId}</Typography></Grid>
                            <Grid item><Typography display='inline' variant="overline">Persons in Queue: {queueState.queuees.nOQueuees}</Typography></Grid>
                            <Grid item><Typography display='inline' variant="overline">Number of Supervisors: {queueState.supervisors.length}</Typography></Grid>
                        </Grid>
                    </Box>
                </Box>
           </Grid>

       </Grid>
    );
}