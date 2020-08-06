import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from "react-helmet";
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './firebase'
import 'firebaseui/dist/firebaseui.css'
import store, { persistor } from './slices/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <Helmet>
            <title>Project Thymus</title>
          </Helmet>
          <CssBaseline />
          <App />
        </Fragment>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
