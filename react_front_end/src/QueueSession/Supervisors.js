import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { SupervisedUserCircle} from '@material-ui/icons';



const useStyles = makeStyles({
    
});


export default function Supervisors(props) {
    const classes = useStyles();

    const listSupervisors = props.supervisors.map((supervisor) =>{
    if(supervisor.isHelping)
        return (<Grid item><SupervisedUserCircle/>
        <Typography>{supervisor.name}
        </Typography></Grid>)
    else
        return <Grid item><SupervisedUserCircle/><Typography>{supervisor.name}</Typography></Grid>
    }
    );
    return(
        <Grid container>
        {listSupervisors}
        </Grid>
    );
}