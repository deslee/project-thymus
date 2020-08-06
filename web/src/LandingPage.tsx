import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container, Grid, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);

const Example = (example: {title: string, body: string}) => <Grid item md={6}>
    <Typography variant="h3" gutterBottom>{example.title}</Typography>
    <Typography>{example.body}</Typography>
</Grid>

const TopBar: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Container>
            <Box marginY={8}>
                <Typography variant="h2" gutterBottom>Introduction</Typography>
                <Typography>
                    People under stress may have a hard time motivating themselves to research options, make phone calls, and book appointments. Our goal is to help those people by letting them offload the mental effort of those activities to others who are willing to donate their time and effort and help them get connected to an organization or provider who can help.
                </Typography>
            </Box>

            <Box marginY={8}>
                <Typography variant="h2" gutterBottom>Examples</Typography>
                <Grid container spacing={4}>
                    {Example({
                        title: 'Seeking mental health help',
                        body: 'People struggling with mental health issues may have difficulty motivating themselves to research options, find a provider that matches their financial and mental health needs, and make appointments. Offering to help with these tasks can go a long way in making sure they get the help they need sooner.'
                    })}
                    {Example({
                        title: 'Finding local resources',
                        body: 'People suffering from loss of income, homelessness, and domestic violence need to find available services in their area and choose the best one to fit their needs. Offering to help them with research and decision making is a kind and generous way to make their lives easier.'
                    })}
                </Grid>
            </Box>

            <Box textAlign="center">
                <Button size="large" variant="contained" color="primary">Request help</Button>
                &nbsp;
                <Button size="large" variant="contained" color="primary">Offer help</Button>
            </Box>

        </Container>
    </div>
}

export default TopBar;