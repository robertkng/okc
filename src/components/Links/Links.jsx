import React, { Component } from 'react';
import './Links.css';

class Links extends Component {



  render() {

    return (
      <div className="links-summary">
      🌟 You like each other!
      <h4>Technology Skills <span>Javascript, HTML, CSS,  React.js, Node.js, Express.js, JQuery, AJAX, PostgreSQL, MongoDB, APIs, MVC, JSON, Webpack, NPM, Rails, Git, Github, and Heroku.</span></h4>
        <a href="https://github.com/robertkng"><img src={require('./github.png')} id="github" className="icons"/></a>
        <a href="https://www.linkedin.com/in/robertkng"><img src={require('./linkedin.png')} id="linkedin" className="icons"/></a>

      <h3>Looking for <span>a great company, near me, for long term position and new friends.</span></h3>

      </div>
    )
  };
}

export default Links;


