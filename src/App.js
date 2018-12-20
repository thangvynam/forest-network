import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Profile from './Component/Profile/Profile';
import { connect } from 'react-redux';
import { CHECK_LOGIN } from './Constant/actionTypes'
import Login from './Component/Login/Login'

class App extends Component {

  render() {
    return (
      this.props.loginReducer.isLogin ? <Profile public_key={this.props.loginReducer.public_key}
                                                 secret_key={this.props.loginReducer.secret_key}/> : <Login/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      loginReducer: state.loginReducer,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
