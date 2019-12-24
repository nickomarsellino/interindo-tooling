// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import {
  Route,
  Switch
  // Redirect
} from 'react-router-dom';
import AppRoutes from '../../routes';
import { Header } from '../../components';

class App extends Component {

  state = {
  };

  render() {
    // const {
    //   state: { showMobileNavigation, scrolled },
    // } = this;
    return (
      <div>
        <Header />
        <Switch>
          {AppRoutes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
          {/* <Redirect from='/dashboard' to='/dashboard/home' />
        <Redirect from='/design-system' to='/design-system/introduction' />
        <Redirect from='*' to='/error-404' /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
