import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {RadioGroup, Radio, FormControlLabel} from '@material-ui/core';


const useStyles = makeStyles({

});
  
export default function RadioButtons(props) {
    const handleChange = (event) => {
        props.setRole(event.target.value);
      };
    
    return(
        <RadioGroup
              row
              aria-label="Role"
              name="role"
              value={props.role}
              onChange={handleChange}
            >
              <FormControlLabel
                value="student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel value="supervisor" control={<Radio />} label="Supervisor" />
        </RadioGroup>
    );
}