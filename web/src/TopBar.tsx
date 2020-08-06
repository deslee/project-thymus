import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useAppSelector } from './slices/store';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const TopBar: React.FC = () => {
    const classes = useStyles();
    const { authenticated, user: { name } } = useAppSelector(state => state.user)

    return <Fragment>
        <div id="login"></div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Project Thymus
                </Typography>
                <Button color="inherit">Offer help</Button>
                <Button color="inherit">Request help</Button>
                {authenticated && <Avatar>{name.substring(0, 1)}</Avatar>}
            </Toolbar>
        </AppBar>
    </Fragment>
}

export default TopBar;