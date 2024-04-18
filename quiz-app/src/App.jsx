/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import HomeComponent from './Components/HomeComponent';
import QuizComponent from './Components/QuizComponent';
import ResultComponent from './Components/ResultComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      percentage: 0, // Initialize percentage state
    };
  }

  pageNavigation = (pageNo, percentage = 0) => { // Accept percentage as argument
    this.setState({
      page: pageNo,
      percentage: percentage, // Update percentage state
    });
  };

  render() {
    const { page, percentage } = this.state;

    if (page === 0) {
      return <HomeComponent pageNavigation={this.pageNavigation} />;
    } else if (page === 1) {
      return <QuizComponent pageNavigation={this.pageNavigation} />;
    } else if (page === 2) {
      return <ResultComponent pageNavigation={this.pageNavigation} percentage={percentage} />; // Pass percentage to ResultComponent
    }

    return null;
  }
}
