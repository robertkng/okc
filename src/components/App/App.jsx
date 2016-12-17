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
          <h2> Manhattan, NY • <span id="match">100% Match</span></h2>
          </div>

        </div>

      </div>
    );
  }
}
// Perfect Match
 // Looks like you two will get along
