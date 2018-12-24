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
      <Router>
        <BasicRouter/>
      </Router>
    );
  }
}


export default (App);