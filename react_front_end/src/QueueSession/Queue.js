import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Person, PersonPinCircle } from '@material-ui/icons';



const useStyles = makeStyles({
    
});


export default function Queue(props) {
    const classes = useStyles();
    const userId = 1;

    //if(queuee.id == state.userId) add arrow pointer
    const listNotInQueue = [];
    const listQueuees = []
    props.queuees.map((queuee) =>
    {
    if(!queuee.inQueue) listNotInQueue.push(<Grid item><Person color="error" /></Grid>);
    else{
    if(queuee.id === userId)
        listQueuees.push(<Grid item><PersonPinCircle color="secondary"/></Grid>);
    else 
        listQueuees.push(<Grid item><Person color="primary" /></Grid>);
    }
    }

    );
    return(
        <Grid 
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="center">
        <Grid item>Queue status:</Grid>
            <Grid item>
                <Grid container>
                {listQueuees}
                </Grid>
            </Grid>
            <Grid item>Not in queue:</Grid>
            <Grid item>
                <Grid container>
                    {listNotInQueue}
                </Grid>
            </Grid>
        </Grid>
    );
}