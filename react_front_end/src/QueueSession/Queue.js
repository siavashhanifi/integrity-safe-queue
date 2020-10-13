import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Person, PersonPinCircle, ArrowForward } from '@material-ui/icons';



const useStyles = makeStyles({

});


export default function Queue(props) {
    const classes = useStyles();
    const userId = 1;

    //if(queuee.id == state.userId) add arrow pointer
    const listNotInQueue = [];
    const listQueuees = []
    props.queuees.map((queuee) => {
        if (!queuee.inQueue) listNotInQueue.push(<Grid item><Person color="error" fontSize="large" /></Grid>);
        else {
            if (queuee.id === userId)
                listQueuees.push(<Grid item>
                    <Grid container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center">
                        <Grid item>
                            <PersonPinCircle fontSize="large" color="secondary" />
                        </Grid>
                        <Grid item><Typography variant="caption" color="secondary">You</Typography></Grid>
                            </Grid>
                    </Grid>);
            else
                listQueuees.push(<Grid item><Person fontSize="large" color="primary" /></Grid>);
        }
    }

    );
    return (
        <Grid
            container
            spacing={3}
            direction="column"
            alignItems="center"
            justify="center">
            <Grid item>Queue:</Grid>
            <Grid item>
                <Grid container>
                    <Grid item><Grid container>
                        <Grid item><Typography>First</Typography></Grid>
                        <Grid item><ArrowForward /></Grid>
                    </Grid>
                    </Grid>
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