import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import getStore from '../store';

const { store, persistor } = getStore();

/**
 * The main entry component to our app
 */
const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <CssBaseline />
        <Routes />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
