import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import JoinOrCreateSession from "./JoinOrCreateSession";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import QueueSession from "./QueueSession";
import QueueSessionReduxContainer from "./QueueSession/QueueSessionReduxContainer";
import QueueManagement from "./QueueManagement";
import QueueManagementReduxContainer from "./QueueManagement/QueueManagementReduxContainer";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
  },
});

function App(props) {
  const classes = useStyles();
  console.log(props.userState.isSupervisor);
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <Route exact path="/">
          <JoinOrCreateSession/>
        </Route>
        <Route exact path="/queue">
          <QueueSessionReduxContainer/>
        </Route>
        <Route path="/queuemanagement">
          <QueueManagementReduxContainer />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
