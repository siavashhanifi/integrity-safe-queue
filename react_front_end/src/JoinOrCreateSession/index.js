import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Container } from '@material-ui/core';
import CreateSessionCard from './CreateSessionCard';
import JoinSessionCard from './JoinSessionCard';


const useStyles = makeStyles({
    page:{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
      },
});


export default function JoinOrCreateSession(props) {
    const classes = useStyles();
 

    return (
        <div className={classes.page}>
            <Grid
                container
                spacing={3}
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12}><JoinSessionCard webSocket={props.webSocket} setWebsocket={props.setWebsocket}/></Grid>
                <Grid item xs={12}><CreateSessionCard webSocket={props.webSocket} setWebsocket={props.setWebsocket}/></Grid>
            </Grid>
        </div>
    );
}