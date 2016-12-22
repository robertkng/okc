import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './Header.css';

class Header extends Component {

sliderHeader () {

      // $(window).scroll(function(){
        let ScrollTop = ($(window).scrollTop());

        if (ScrollTop > 100) {
            document.getElementById('slider').style.top + 80 + 'px';
        }
    // });
    }


    // let slider = document.getElementById("slider");
    // let yAxis = parseInt(slider.scrollTop);
    // if yAxis
    // if slider.scrollTop > 200 {
    // slider + 80 + "px";

    // $(window).scrollTop()
// }

  render() {
    return (
      <div id="header">

        <div id="slider">
          <img src={require('./profile.jpg')} id="slider-image"/>
          <h7 id="slider-name"> robert_ng <span id="slider-dot">• 100% Match </span> </h7>
            <button id="slider-liked"> ⭐  Liked</button>
            <button id="slider-message">Message</button>
        </div>

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
