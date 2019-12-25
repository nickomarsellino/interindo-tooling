import React, { Component } from 'react';
import './styles.scss';


import { HeroBanner } from '../../../components';

class LoginPage extends Component {
  // state = {
  // };

  // componentDidMount() {
  // }

  // render
  render() {
    // const {
    //   // handleClosePage,
    //   // state: { showSteps }
    // } = this;

    return (
      <div className="p-login-page">
        <HeroBanner bannerTitle="Login Page"/>
      </div>
    );
  }
}


export default LoginPage;

