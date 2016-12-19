import React, { Component } from 'react';
import './Two.css';

class Two extends Component {



  render() {

    return (
      <div className="two-summary">
      <h3>The two of us</h3>
        <img src={require('./htmlcss.png')} id="htmlcss" className="two-icons"/>
        <img src={require('./javascript.png')} id="javascript" className="two-icons"/>
        <img src={require('./react.png')} id="react" className="two-icons"/>
      </div>
    )
  };
}

export default Two;


