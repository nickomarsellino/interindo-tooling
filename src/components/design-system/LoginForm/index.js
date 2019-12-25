
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import './styles.scss';

import { Card, Form } from 'semantic-ui-react'

import { H2 } from '../../../components'

// data dummy
import bannerImg from '../../../assets/images/dummy/hero-banner.jpg';

class LoginForm extends Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, password } = this.state
    console.log(this.state.name, this.state.password);
    this.setState({ name: name, email: password })
  }

  render() {
    const {
      state: { name, password },
      // props: {
      //   bannerImage,
      //   bannerTitle
      // }
    } = this;
    return (
      <Fade>
        <div className="ds-login-form">
          <Card>
            {/* <img className="form-bg" src={bannerImg} /> */}
            <H2>LOGIN FORM</H2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                label='Username'
                placeholder='Username'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
              <Form.Input
                label='Password'
                placeholder='Password'
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              <Form.Button color='yellow' content='Login' />
            </Form>
          </Card>
        </div>
      </Fade>
    );
  }
}

LoginForm.propTypes = {
  bannerImage: PropTypes.string,
  bannerTitle: PropTypes.string,
}

LoginForm.defaultProps = {
  bannerImage: bannerImg,
  bannerTitle: '',
}

export default LoginForm;
