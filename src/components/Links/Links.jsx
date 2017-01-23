import React, { Component } from 'react';
import './Links.css';

class Links extends Component {

  render() {
    return (
      <div className="links-summary">
        <h4>🌟 You like each other!</h4>
        <hr>
        </hr>
        <a href="https://github.com/robertkng"> <img src={require('./github.png')} id="github" className="icons" /></a>
        <a href="https://www.linkedin.com/in/robertkng"> <img src={require('./linkedin.png')} id="linkedin" className="icons" /></a>
        <h5>Technology Skills <span id="tech-skills">JavaScript, HTML5, CSS3,  Bootstrap, React.js, JQuery, Node.js, Express.js, PostgreSQL, MongoDB, RESTful APIs, AJAX, MVC, JSON,  Webpack, Ruby on Rails, Git, Github, and Heroku.</span></h5>

        <h6><span>Looking for </span> a great company that fosters a learning environment, near me, for long term position and new friends.</h6>

      </div>
    );
  }
}

export default Links;
