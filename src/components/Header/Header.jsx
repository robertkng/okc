import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'
import './Header.css';

// const tooltip = (
//   <Tooltip id="tooltip"><strong>Perfect Match</strong> Looks like you two will get along.</Tooltip>
// );

// const positionerInstance = (
//   <ButtonToolbar>

//     <OverlayTrigger placement="bottom" overlay={tooltip}>
//       <Button bsStyle="default">100% Match</Button>
//     </OverlayTrigger>

//   </ButtonToolbar>
// );




class Header extends Component {
  render() {
    return (

        <div id="header">

          <div id="image">
          <img src={require('./profile.jpg')} id="profile"/>
          </div>

          <div id="top">
          <h1> robert_ng </h1>
          <h2> Manhattan, NY <span id="dot">•</span> <span data-tip id="match">100% Match</span></h2>
            <ReactTooltip id='match' type='light' effect='solid'>
              <p>Look no further, you have found the perfect candidate.</p>
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
