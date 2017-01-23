import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {

  componentWillMount() {
    this.props.getSummary();
  }

  selfSummary(summary) {
    return summary.map((render, index) => {
      return (
        <ul key={index} className="results-summary">
          <li>{render.self_summary} </li>
        </ul>
      );
    });
  }

  goodAt(summary) {
    return summary.map((render, index) => {
      return (
        <ul key={index} className="results-good">
          <li>{render.good_at}</li>
        </ul>
      );
    });
  }

  messageMe(summary) {
    return summary.map((render, index) => {
      return (
        <ul key={index} className="results-message">
          <li>{render.message_me}</li>
        </ul>
      );
    });
  }

  render() {
    const summary = this.props.summary;

    return (
      <div className="summary-summary">

        <h3>My self-summary</h3>
        {this.selfSummary(summary)}

        <h3>I’m really good at</h3>
        {this.goodAt(summary)}

        <h3>You should message me if</h3>
        {this.messageMe(summary)}

      </div>
    );
  }
}

export default Summary;
