import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SupervisedUserCircle, Person} from '@material-ui/icons';



const useStyles = makeStyles({
    
});


export default function Supervisors(props) {
    const classes = useStyles();

    const listSupervisors = props.supervisors.map((supervisor) =>{
    if(supervisor.isHelping)
        return (<Grid item>
                    <Grid container spacing={1}>
                        <Grid item>
                        <Grid container
                                spacing={0}
                                direction="column"
                                alignItems="center"
                                justify="center">
                        <Grid item><SupervisedUserCircle fontSize="large"/></Grid>
                        <Grid item><Typography>{supervisor.name}</Typography></Grid>
                        </Grid>
                        </Grid>
                        <Grid item><Typography>is helping</Typography></Grid>
                        <Grid item><Person color="primary"/></Grid>
                    </Grid>
                </Grid>)
    else
        return (<Grid item>
            <Grid container spacing={1}>
                <Grid item>
                <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center">
                <Grid item><SupervisedUserCircle htmlColor="#4caf50" fontSize="large"/></Grid>
                <Grid item><Typography>{supervisor.name}</Typography></Grid>
                </Grid>
                </Grid>
                <Grid item><Typography>is available</Typography></Grid>
            </Grid>
        </Grid>)
    }
    );
    return(
        <Grid container spacing={2}>
        {listSupervisors}
        </Grid>
    );
}