import React, { Component } from 'react';
import './App.css';

export default class App extends Component {


  render() {
    return (
      <div id="container">

        <div id="nav">
          <div id="image">
          <img src={require('./profile.jpg')} id="profile"/>
          </div>

          <div id="header">
          <h1> robert_ng </h1>
          <h2> Manhattan, NY • 100% Match </h2>
          </div>

        </div>

      </div>
    );
  }
}
