import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Profile from './Component/Profile/Profile';
import { connect } from 'react-redux';
import { DO_LOGIN } from './Constant/actionTypes'
import Login from './Component/Login/Login'

class App extends Component {

  render() {
    return (
      this.props.loginReducer.isLogin ? <Profile public_key={this.props.loginReducer.public_key}
                                                 secret_key={this.props.loginReducer.secret_key}/> : <Login/>
    );
  }
  componentDidMount(){
    axios.get('/login')
             .then((res)=> {
               console.log(res)
               if(res.data.isLogin)
               this.props.login(res.data)               
             })
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      loginReducer: state.loginReducer,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (res) => {
      console.log(res);
      
      dispatch({type: DO_LOGIN, isLogin: true, public_key: res.clientPublicKey})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);