import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, Paper } from '@material-ui/core';
import Queue  from './Queue';
import Supervisors from './Supervisors';
import NotInQueue from './NotInQueue';
import { Autorenew } from '@material-ui/icons';
import AlertDialog from './AlertDialog';
import PasswordField from './PasswordField';


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


export default function QueueManagement() {
    const classes = useStyles();
    const userid = 1
    const sessionId = 1337;
    const supervisorPassword = "XyzdWtf";
    const queueState = {sessionId: 1337,
                        supervisors: [{ name: "Leif", isHelping: true }, { name: "Robert", isHelping: true }, { name: "Anders", isHelping: false }],
                        queuees: [{id: 4, inQueue: true}, {id:0, inQueue: false},{id:1, inQueue: true}, {id:2, inQueue: true}, {id:3, inQueue: false}],
                        peopleInQueue: 3,
                    }

    const [alertDialogOpen, alertDialogSetOpen] = React.useState(false);
    const [alertDialogAction, setAlertDialogAction] = React.useState('');

    const handleHelpNext = (event) => {
            //tell backend this supervisor wants to help next in queue
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

           <Grid container item xs={12} direction="column" justify="center" alignItems="center" spacing={0}>
                <Box className={classes.buttons}>
                    <Button color="primary" variant="contained" size="large" onClick={handleHelpNext}>Help Next</Button>
                    <Button color="secondary" variant="contained" size="large" onClick={handleLeaveSession}>Leave Session</Button>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="30vh" padding={3} borderRadius={15}>
                    <Typography>Not in queue:</Typography>
                    <NotInQueue queuees={queueState.queuees}/>
                </Box>
           </Grid>

           <Grid item xs={6}>
                <Box bgcolor="white" height="30vh" padding={3} textAlign='left' className={classes.infoBox} borderRadius={15}>
                    <Typography>Session Info:</Typography>
                    <Grid container wrap='wrap' spacing={1}>
                        <Grid item xs={6}> <Typography >Queue session: {queueState.sessionId}</Typography></Grid>
                        <Grid item xs={6}><Typography >Supervisor Password: </Typography><PasswordField password={supervisorPassword}></PasswordField></Grid>
                        <Grid item xs={6}><Typography >Persons in Queue: {queueState.peopleInQueue}</Typography></Grid>
                        <Grid item xs={6}><Typography >Number of Supervisors: {queueState.supervisors.length}</Typography> </Grid>
                    </Grid>
                </Box>
           </Grid>

       </Grid>
    );
}