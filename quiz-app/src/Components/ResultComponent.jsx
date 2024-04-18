/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './custom-components.css';

export default class ResultComponent extends Component {
  static propTypes = {
    pageNavigation: PropTypes.func.isRequired,
    percentage: PropTypes.number.isRequired,
  };

  navigateToQuiz = () => {
    this.props.pageNavigation(1);
  };

  navigateToHome = () => {
    this.props.pageNavigation(0);
  };

  confirmQuit = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className='result-container'>
        <h2 className='result-heading'>Result</h2>
        <div className='result-box'>
          <h3 className='result-phrase'>Well done! Keep it up!</h3>
          <h2 className='result-score'>Your score is {this.props.percentage.toFixed(2)}%</h2>
          <button className='quiz-option quit-btn' onClick={this.confirmQuit}>Restart</button>
        </div>
      </div>
    );
  }
}
