// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from 'react-router-dom';
import AppRoutes from '../../routes/client';
// import AdminRoutes from '../../routes/admin';

class App extends Component {
  render() {
    // const {
    //   state: { showMobileNavigation, scrolled },
    // } = this;
    return (
      <Router>
        <Switch>
          {AppRoutes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
          {/* <Redirect from='/dashboard' to='/dashboard/home' />
        <Redirect from='/design-system' to='/design-system/introduction' />
        <Redirect from='*' to='/error-404' /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
