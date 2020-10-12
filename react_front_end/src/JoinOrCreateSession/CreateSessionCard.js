import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Typography, Button, Grid } from '@material-ui/core';



const useStyles = makeStyles({
    cardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px'
        }
    },
});


export default function CreateSessionCard() {
    const classes = useStyles();

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
                        Create a new session
            </Typography>
                </Grid>
                <Grid item>

                    <Button color="secondary" variant="contained">Create</Button>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    );
}