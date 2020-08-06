import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Button, Box, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);

const TopBar: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.root}>

        <form>
            <Container>
                <Typography variant="h2" gutterBottom>What do you need help with?</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth label="Title" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" fullWidth label="Location" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" rows={10} fullWidth label="Details" multiline />
                    </Grid>

                    <Grid item xs={12}>
                        <Box textAlign="right">
                            <Button type="submit" color="primary" variant="contained">Submit</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </form>
    </div>
}

export default TopBar;