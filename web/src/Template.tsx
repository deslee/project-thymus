import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);

const TopBar: React.FC = () => {
    const classes = useStyles();

    return <div className={classes.root}>
    </div>
}

export default TopBar;