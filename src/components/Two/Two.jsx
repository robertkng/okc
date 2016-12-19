import React, { Component } from 'react';
import './Two.css';

class Two extends Component {



  render() {

    return (
      <div className="two-summary">
      <h3><span id="two">The two of us</span></h3>
      <div className="horizontal">
        <img src={require('./htmlcss.png')} id="htmlcss" className="two-icons"/>
        <img src={require('./javascript.png')} id="javascript" className="two-icons"/>
        <img src={require('./react.png')} id="react" className="two-icons"/>
      <div id="htmlcss-hundred">100%</div>
      <div id="javascript-hundred">100%</div>
      <div id="react-hundred">100%</div>
      </div>

      </div>
    )
  };
}

export default Two;


