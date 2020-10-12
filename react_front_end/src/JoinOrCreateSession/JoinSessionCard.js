import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, TextField, Typography, Button, Grid, Card } from '@material-ui/core';



const useStyles = makeStyles({
    cardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px'
        }
    },
});


export default function JoinSessionCard() {
    const classes = useStyles();
    const [sessionId, setSessionId] = React.useState('');
    const handleChangedSessionId = (event) => {
        setSessionId(event.target.value);
    };
    return(
        <Card >
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
                    <TextField id="outlined-basic"
                        label="Session id"
                        variant="outlined"
                        value={sessionId}
                        onChange={handleChangedSessionId}
                    />
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained">Join</Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
}