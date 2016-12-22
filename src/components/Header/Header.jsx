// import React, { Component } from 'react';
// import ReactTooltip from 'react-tooltip';
// import './Header.css';

// class Header extends Component {

//   componentDidMount() {
//     this.props.slider();
//   }

//   render() {
//     return (
//       <div id="header">

//         <div id="slider">
//           <img src={require('./profile.jpg')} id="slider-image"/>
//           <h7 id="slider-name"> robert_ng <span id="slider-dot">• 100% Match </span> </h7>
//           <button id="slider-liked"> ⭐  Liked</button>
//           <button id="slider-message">Message</button>
//         </div>

//         <div id="image">
//           <img src={require('./profile.jpg')} id="profile"/>
//         </div>

//         <div id="top">
//           <h1> robert_ng </h1>
//           <h2> Manhattan, NY <span id="dot">•</span> <span data-tip data-for="tooltip-match" id="match">100% Match</span></h2>
//           <ReactTooltip id="tooltip-match" place="bottom" type="light" effect="solid">
//             <ul id="perfect-match">
//               <li>Perfect Match</li>
//               <li>Look no further, you have found your new developer.</li>
//             </ul>
//           </ReactTooltip>
//         </div>

//         <div id="tooltip">
//         </div>

//         <div id="button">
//           <button id="liked"> ⭐  Liked</button>
//           <button id="message">Message</button>
//         </div>

//       </div>
//     );
//   }
// }

// export default Header;


import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import SlidingHeader from '../../utils/toggle-slide';
import profile from './profile.jpg';
import './Header.css';

class Header extends Component {
  componentDidMount() {
    const navSlider = new SlidingHeader({
      element: '.slider',
      class: 'hide-slider',
    });
  }

  render() {
    return (
      <div id="header">

        <div className="slider">
          <img src={profile} alt="profile" id="slider-image" />
          <h7 id="slider-name"> robert_ng <span id="slider-dot">• 100% Match </span> </h7>
          <button id="slider-liked"> ⭐  Liked</button>
          <button id="slider-message">Message</button>
        </div>

        <div id="image">
          <img src={profile} alt="profile" id="profile" />
        </div>

        <div id="top">
          <h1> robert_ng </h1>
          <h2>
            Manhattan, NY
            <span id="dot">•</span>
            <span data-tip data-for="tooltip-match" id="match">100% Match</span>
          </h2>
          <ReactTooltip id="tooltip-match" place="bottom" type="light" effect="solid">
            <ul id="perfect-match">
              <li>Perfect Match</li>
              <li>Look no further, you have found your new developer.</li>
            </ul>
          </ReactTooltip>
        </div>

        <div id="tooltip" />

        <div id="button">
          <button id="liked"> ⭐  Liked</button>
          <button id="message">Message</button>
        </div>

      </div>
    );
  }
}

export default Header;
