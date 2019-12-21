import React, { Component } from 'react';
import './Register.scss' ;
import Button from '../../../components/atoms';
import { registerUserAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisSubmit = async () => {
        const { email, password } = this.state;
        console.log("email, password ", email, password);
        const {history} = this.props;
        const res = await this.props.registerAPI({email, password}).catch(err => err);
        if(res) {
            this.setState ({
                email: '',
                password: ''
            })
            history.push('/login');
        }
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="test" onChange={this.handleChangeText} />
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} />
                    <Button onClick={this.handleRegisSubmit} title="Regis" loading={this.props.isLoading} />
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register);
// export default Register;