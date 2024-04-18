/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './custom-components.css';

export default class HomeComponent extends Component {
  static propTypes = {
    pageNavigation: PropTypes.func.isRequired,
  };

  navigateToNextPage = () => {
    this.props.pageNavigation(1);
  };

  render() {
    return (
      <div className='main-container'>
        <h1>Welcome to the Quiz App</h1>
        <button className='start-btn' onClick={this.navigateToNextPage}>
          Start Quiz
        </button>
      </div>
    );
  }
}
