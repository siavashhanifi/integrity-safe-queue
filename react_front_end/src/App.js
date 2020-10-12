import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import JoinOrCreateSession from './JoinOrCreateSession';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  container:{
    backgroundColor: "blue",
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
            <Container maxWidth={false} className={classes.container} >
                  <JoinOrCreateSession />
            </Container>
    </React.Fragment>
  );
}

export default App;
