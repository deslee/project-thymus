import React, { useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import * as firebase from 'firebase'
import { ui } from './firebase'
import { useAppDispatch } from './slices/store';
import { userActions } from './slices/userSlice';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
    }),
);

const TopBar: React.FC = () => {
    const classes = useStyles();

    const dispatch = useAppDispatch()
    const history = useHistory()

    useEffect(() => {
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                    console.log(authResult);
                    async function run() {
                        const token = await authResult.user.getIdToken()
                        await dispatch(userActions.login({
                            token,
                            uid: authResult.user.uid,
                            name: authResult.user.displayName,
                            email: authResult.user.email,
                            verified: authResult.user.emailVerified,
                        }))
                        history.replace('/')
                    }
                    run()
                    return false;
                }
            }
        })
    }, [dispatch, history])

    return <div id="firebaseui-auth-container" className={classes.root}>
    </div>
}

export default TopBar;