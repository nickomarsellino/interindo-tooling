import React, { Component } from 'react';
import './styles.scss';


import { LoginForm } from '../../../../components';

class LoginPage extends Component {
  render() {

    return (
      <div className="p-login-page">
        <div className='container'>
          <LoginForm 
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}


export default LoginPage;