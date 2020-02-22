import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import { Card, Form } from 'semantic-ui-react'
import { loginUserAPI } from '../../../config/redux/action';
import { H2 } from '../../../components'

// data dummy
import bannerImg from '../../../assets/images/dummy/hero-banner.jpg';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = async () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const res = await this.props.loginAPI({email, password}).catch(err => err);
    console.log(res);
    if(res) { 
        localStorage.setItem('userData', JSON.stringify(res))
        this.setState ({
            email: '',
            password: '',
            isLoginStatus: true
        })
        history.push('/auth/admin/dashboard');
    }
    else {
        console.log("GAGAL !");
    }
  }

  render() {
    const {
      state: { email, password },
      // props: {
      //   bannerImage,
      //   bannerTitle
      // }
    } = this;
    return (
      <Fade>
        <div className="ds-login-form">
          <Card>
            <H2>LOGIN FORM</H2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                required
                label='E-mail'
                placeholder='Input E-mail'
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                required
                label='Password'
                placeholder='Input Password'
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              <p style={{fontSize: '14px', color: 'red'}}>{this.props.errorMessage}</p>
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

const reduxState = (state) => ({
  isLoading: state.isLoading,
  errorMessage: state.errorMessage
})

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data))
})


export default connect(reduxState, reduxDispatch)(LoginForm);