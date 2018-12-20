import React, { Component } from "react";
import axios from 'axios';
import './Login.css'
import { CHECK_LOGIN } from '../../Constant/actionTypes';
import { DO_LOGIN } from '../../Constant/actionTypes';
import { connect } from 'react-redux';
const { Keypair } = require('stellar-base');

class Login extends Component {
  render() {
    return (
        <div class="log-form">
  <h2>Login to your account</h2>
  <form>
    <input name="sckey" type="text" title="secretkey" placeholder="Secret Key" onChange={(event) => this.props.handleInput(event)} autoFocus autocomplete="off"/>
    <button type="submit" class="btn" onClick={this.props.handleLogin}>Login</button>
  </form>
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
        axios.post('/login', {isLogin: true, public_key})
             .then((res)=> {
               console.log(res);               
             })
        dispatch({ type: DO_LOGIN, isLogin: true, public_key, secret_key})
      } catch (error) {
        alert("Invalid Secret Key")
      }

    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);