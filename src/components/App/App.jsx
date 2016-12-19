import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Summary from '../Summary/Summary.jsx';
import Links from '../Links/Links.jsx';
import Two from '../Two/Two.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {

    summary: [],
    };
  }

  getSummary() {
    fetch(`/summary`)
    .then(r => r.json())
    .then((results) => {
      this.setState({
        summary: results.data
      });
      // console.log(this.state);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="container">

          <Header
          />
          <div id="block">
          </div>

        <div id="bio">

        <div className="app-summary">
          <Summary
            summary={this.state.summary}
            getSummary={this.getSummary.bind(this)}
          />

          <Links
          />
        </div>

        <div className="app-links">
        </div>


        </div>

      </div>
    );
  }
}
// <span>Perfect Match</span>
// Perfect Match
//  Looks like you found your perfect match.


          // <Two
          // />
