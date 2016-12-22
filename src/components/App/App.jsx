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
        summary: results.data,
      });
    })
    .catch(err => console.log(err));
  }

  sliderHeader() {
    // const ScrollTop = ($(window).scrollTop());
    // if (ScrollTop > 0) {
    //   document.getElementById('slider').style.top + 80 + 'px';
    // }

    const scrollY = window.scrollY;
    const sliderOffSet = document.getElementById('slider').offsetTop;
    if (scrollY > -1000) {
    console.log(scrollY);
      sliderOffSet + 200 + 'px';
    console.log(sliderOffSet);
    }
  }

  render() {
    return (

      <div id="container">

        <Header
          slider={this.sliderHeader.bind(this)}
        />
        <div id="block"></div>
        <div id="bio">

          <div className="app-summary">
            <Summary
              summary={this.state.summary}
              getSummary={this.getSummary.bind(this)}
            />
            <Links />
          </div>
          <Two />
        </div>

      </div>
    );
  }
}

