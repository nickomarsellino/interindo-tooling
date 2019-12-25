// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Redirect
} from 'react-router-dom';
import AppRoutes from '../../routes';
import { Header, Footer, ContactUsButton } from '../../components';

class App extends Component {
  render() {
    // const {
    //   state: { showMobileNavigation, scrolled },
    // } = this;
    return (
      <Router>
        <ContactUsButton/>
        <Header/>
        <Switch>
          {AppRoutes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
          {/* <Redirect from='/dashboard' to='/dashboard/home' />
        <Redirect from='/design-system' to='/design-system/introduction' />
        <Redirect from='*' to='/error-404' /> */}
        </Switch>
        <Footer/>
        <Switch>
          
        </Switch>
      </Router>
    );
  }
}

export default App;
