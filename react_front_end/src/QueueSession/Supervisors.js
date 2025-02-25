import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Supervisor from './Supervisors/Supervisor';


const useStyles = makeStyles({
    
});


export default function Supervisors(props) {
    const classes = useStyles();

    const listSupervisors = props.supervisors.map((supervisor) =>{
    if(supervisor.isHelping)
        return (<Grid item >
                   <Supervisor supervisorDetails={supervisor} isHelping={true}/>
                </Grid>)
    else
        return (<Grid item >
                    <Supervisor supervisorDetails={supervisor} isHelping={false}/>
                </Grid>)
    }
    );
    return(
        <Grid 
        container
        spacing={1}
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        wrap='wrap'
        style={{ height:'100%', width: '100%' }}>
            {listSupervisors}
        </Grid>
    );
}