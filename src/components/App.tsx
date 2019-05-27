import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes';

/**
 * The main entry component to our app
 */
const App: React.FC = () => (
  <Router>
    <CssBaseline />
    <Routes />
  </Router>
);

export default App;
