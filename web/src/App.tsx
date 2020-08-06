import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopBar from './TopBar';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RequestHelpPage from './RequestHelpPage';
import { Box } from '@material-ui/core';

function App() {
  return <Fragment>
    <TopBar />
    <Box padding={2}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/request-help">
            <RequestHelpPage />
          </Route>
        </Switch>
      </Router>
    </Box>
  </Fragment>
}

export default App;
