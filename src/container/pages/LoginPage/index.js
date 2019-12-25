import React, { Component } from 'react';
import './styles.scss';


import { LoginForm } from '../../../components';

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
        <LoginForm/>
      </div>
    );
  }
}


export default LoginPage;

