import React, { Component } from 'react';
import './Header.css';

// render input fields and run the search function when clicking the button
class Header extends Component {
  render() {
    return (

        <div id="header">

          <div id="image">
          <img src={require('./profile.jpg')} id="profile"/>
          </div>

          <div id="top">
          <h1> robert_ng </h1>
          <h2> Manhattan, NY <span id="dot">•</span> <span id="match">100% Match</span></h2>
          </div>

          <div id="button">
          <button id="liked"> ⭐  Liked</button>
          <button id="message">Message</button>

          </div>

        </div>

    )
  }
}


export default Header;
