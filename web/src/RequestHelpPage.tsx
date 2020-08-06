import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Button, Box, Grid, Container } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as firebase from 'firebase'
import { db } from './firebase';
import { useAppSelector } from './slices/store';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);

const TopBar: React.FC = () => {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const { user: { uid } } = useAppSelector(state => state.user)

    return <div className={classes.root}>

        <form onSubmit={handleSubmit(async (data) => {
            console.log(data)
            db.collection('requests').add({
                ...data,
                userId: uid,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        })}>
            <Container>
                <Typography variant="h2" gutterBottom>What do you need help with?</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField name="title" variant="outlined" fullWidth label="Title" inputRef={register} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="location" variant="outlined" fullWidth label="Location" inputRef={register} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="details" variant="outlined" rows={10} fullWidth label="Details" multiline inputRef={register} />
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