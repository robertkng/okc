import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

  }


  render() {
    return (
      <div id="container">

          <Header
          />
          <div id="block">
          </div>

          <Summary
          />

          <Links
          />

          <Two
          />


      </div>
    );
  }
}
// <span>Perfect Match</span>
// Perfect Match
 // Looks like you two will get along
