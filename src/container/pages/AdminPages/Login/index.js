import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserAPI } from '../../../../config/redux/action';
import Button from '../../../../atoms/index';
import { tsConstructSignatureDeclaration } from '@babel/types';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    // TEST 
    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async () => {
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
        console.log("this.state.isLoginStatus ",this.state.isLoginStatus)
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">SILAHKAN LOGIN</p>
                    <input className="input" id="email" placeholder="Email" type="test" onChange={this.handleChangeText} />
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} />
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
                    <p>{this.props.errorMessage}</p>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})


export default connect(reduxState, reduxDispatch)(Login);