import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  TextField,
  Typography,
  Button,
  Grid,
  Card,
} from "@material-ui/core";
import RadioButtons from './RadioButtons';
import { Redirect } from 'react-router-dom';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const useStyles = makeStyles({
  cardContent: {
    padding: "16px",
    "&:last-child": {
      paddingBottom: "16px",
    },
  },
});

export default function JoinSessionCard(props) {
  const classes = useStyles();
  const [role, setRole] = React.useState('student');

  const [sessionId, setSessionId] = React.useState("");
  const handleChangedSessionId = (event) => {
    setSessionId(event.target.value);
  };


  const [password, setPassword] = React.useState("");
  const handleChangedPassword = (event) => {
    setPassword(event.target.value);
  };
  
  var nextPage;
  const [redirect, setRedirect] = React.useState(false);
  const handleJoin = () => {
    //const webSocket = new WebSocket('ws://127.0.0.1:8000');
    props.createWebSocket('ws://127.0.0.1:8000');

    setRedirect(true);
  }
  if(role === 'student')
    nextPage="/queue";
  else
    nextPage="/queuemanagement";


  return (

    <Card>
      <CardContent className={classes.cardContent}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Join session
            </Typography>
          </Grid>

          <Grid item>
            <TextField
              id="outlined-basic"
              label="Session id"
              variant="outlined"
              value={sessionId}
              onChange={handleChangedSessionId}
            />
          </Grid>
          <Grid item>
            <RadioButtons role={role} setRole={setRole}/>
          </Grid>
        
            {role === 'supervisor' ?
                    (<Grid item>
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={handleChangedPassword}
                      />
                    </Grid>)
            : null }

          <Grid item>
            <Button color="primary" variant="contained" onClick={handleJoin}>
              Join
              {redirect ? <Redirect to={nextPage}/> : null}         
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
