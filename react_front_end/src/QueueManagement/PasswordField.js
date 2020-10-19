import React, { useState } from 'react';
import {  TextField, IconButton, InputAdornment} from '@material-ui/core'
import {Visibility, VisibilityOff} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
textField:{
}
}));

export default function PasswordField(props){
const classes = useStyles();
const [type, setType] = useState('password');
const handleToggleShowPassword = (event) => {
    if(type === 'password')
        setType('text');
    else
        setType('password');
}

return( 
<TextField size='small' style={{width: '160px'}} classname={classes.textField} variant="outlined" value={props.password} type={type}
        InputProps={{
          endAdornment: (
          
                <InputAdornment>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleToggleShowPassword}
                >
                  {type === 'text' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
          ),
        }}>

</TextField>
);

}