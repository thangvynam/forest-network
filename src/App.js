import React, { Component } from 'react';
import './App.css';
import Profile from './Component/Profile/Profile';
import axios from 'axios';
class App extends Component {

  render() {
   
    axios.get('http://localhost:3001/getdata')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    return (
      <div >
        <Profile />
      </div>
    );
  }
}

export default App;
