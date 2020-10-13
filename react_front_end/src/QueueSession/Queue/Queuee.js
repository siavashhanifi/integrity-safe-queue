import React from 'react';
import { Person } from '@material-ui/icons'


export default function Queuee(props){
const inQueue = props.inQueue;
let queuee;
if(inQueue)
 queuee = <Person color="primary" fontSize="large" />;
else
 queuee = <Person color="error" fontSize="large" />;
return( 
<div>
  {queuee}
</div>
);

}