import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from 'react-router-dom';
import AppRoutes from '../../routes';
import Routing from './index';
import { Header } from '../../components';

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;