import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router';

import { DO_LOGIN } from '../../Constant/actionTypes';
import { connect } from 'react-redux';
const { Keypair } = require('stellar-base');

class Login extends Component {
  render() {
    if(this.props.loginReducer.isLogin === true){
      return (<Redirect to="/"/>)
  }
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-form-title" style={{backgroundImage: 'url(images/bg-01.jpg)'}}>
              <span className="login100-form-title-1">
                Sign In
              </span>
            </div>
            <form className="login100-form validate-form">
              <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                <span className="label-input100">Secret Key</span>
                <input className="input100" type="text" name="pass" placeholder="Enter secret key" onChange={(event) => this.props.handleInput(event)} autoFocus autocomplete="off" />
                <span className="focus-input100" />
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={this.props.handleLogin}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginReducer: state.loginReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  let secret_key = '';
  return {
    handleInput: (event) => {
      secret_key = event.target.value;

    },
    handleLogin: () => {
      try {
        const key = Keypair.fromSecret(secret_key)
        const public_key = key.publicKey()
        sessionStorage.setItem('secret_key', secret_key)
        axios.post('/login', { isLogin: true, public_key })
        dispatch({ type: DO_LOGIN, isLogin: true, public_key, secret_key })
      } catch (error) {
        alert("Invalid Secret Key")
      }

    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);