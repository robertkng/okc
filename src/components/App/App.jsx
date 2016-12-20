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
    // opacity: false,

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

  // toggle() {
  //   const tooltipNode = ReactDomNode(this)
  //   this.setState({
  //     opacity: !this.state.opacity,
  //     top: tooltipNode.offsetTop,
  //     left: tooltipNode.offsetLeft
  //   })
  // }

  render() {
    // const style = {
    //   zIndex: (this.state.opacity) ? 1000 : -1000,
    //   opacity: +this.state.opacity,
    //   top: (this.state.top || 0) + 20,
    //   left: (this.state.left || 0) - 30
    // }

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

          <Two
          />

        </div>

      </div>
    );
  }
}



        // <div className="app-links">
        // </div>

      //   <div style={{display: "inline"}}>
      //   <span style={{color: "blue"}} onMouseEnter={this.toggle} onMouseOut={this.toggle}>
      //     {this.props.children}
      //   </span>
      //   <div className="tooltip bottom" style="style" role="tooltip">
      //     <div className="tooltip-arrow"></div>
      //     <div className="tooltip-innner">
      //       {this.props.text}
      //     </div>
      //   </div>
      // </div>

          // <div>
            // <Tooltip text="Perfect Match Looks like you two will get along.">100% Match</Tooltip>
          // </div>,
          // document.getElementById("tooltip")
