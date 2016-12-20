import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './Header.css';

class Header extends Component {
  render() {
    return (

        <div id="header">

          <div id="image">
          <img src={require('./profile.jpg')} id="profile"/>
          </div>

          <div id="top">
          <h1> robert_ng </h1>
          <h2> Manhattan, NY <span id="dot">•</span> <span data-tip data-for="tooltip-match" id="match">100% Match</span></h2>
            <ReactTooltip id="tooltip-match" place="bottom" type="light" effect="solid">
              <ul id="perfect-match">
                <li>Perfect Match</li>
                <li>Look no further, you have found your new developer.</li>
              </ul>
            </ReactTooltip>
          </div>

          <div id="tooltip">
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
