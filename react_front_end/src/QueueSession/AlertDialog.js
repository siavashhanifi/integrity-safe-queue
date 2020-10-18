import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const MESSAGE_LEAVE_QUEUE = "Leave the queue? You will lose your position."
const MESSAGE_LEAVE_SESSION = "Leave the session?"


export default function AlertDialog(props) {
  
  
    const handleNo = () => {
      props.setOpen(false);
    };

    const handleYes = () => {
      props.setOpen(false);
      if(props.action === 'LEAVE_QUEUE');
      //tell backend queuee left queue
      else if(props.action === 'LEAVE_SESSION');
      //tell backend queuee left session
    };
  
    return (
      <div>
     
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{props.action === 'LEAVE_QUEUE' ? 
              'Leave queue?' : 'Leave session?'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.action === 'LEAVE_QUEUE' ? 
              MESSAGE_LEAVE_QUEUE : MESSAGE_LEAVE_SESSION}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleNo} color="primary">
              No
            </Button>
            <Button onClick={handleYes} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }