import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import { connect } from 'react-redux';
import { DO_LOGIN } from './Constant/actionTypes'
import Login from './Component/Login/Login'
import NewsFeed from './Component/NewsFeed/NewsFeed';
import BasicRouter from './Router/BasicRouter'
class App extends Component {

  render() {
    return (
      // this.props.loginReducer.isLogin ? <Profile public_key={this.props.loginReducer.public_key}
      //                                            secret_key={this.props.loginReducer.secret_key}/> : <Login/>
      <Router>
        <div>
        
        { 
          this.props.loginReducer.isLogin ? 
            <div>
              <NewsFeed public_key={this.props.loginReducer.public_key}
                        secret_key={this.props.loginReducer.secret_key}  />
               <BasicRouter/>
            </div> :
           <Login/>
           }
        </div>
      </Router>
      
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