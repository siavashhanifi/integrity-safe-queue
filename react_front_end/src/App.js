import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import JoinOrCreateSession from './JoinOrCreateSession';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import QueueSession from './QueueSession';
import QueueSessionReduxContainer from './QueueSession/QueueSessionReduxContainer';
import QueueManagement from './QueueManagement';
import QueueManagementReduxContainer from './QueueManagement/QueueManagementReduxContainer';


const useStyles = makeStyles({
  container:{
    height: "100vh",
    width: "100vw",
    position: "absolute"
  },
});


function App(props) {
const classes = useStyles();
console.log(props.userState.isSupervisor);
  return (
    <React.Fragment>
            <CssBaseline /> 
                 <QueueManagementReduxContainer/>
      
    </React.Fragment>
  );
}

export default App;
