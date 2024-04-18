/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './custom-components.css';
import quizData from'../../../resources/quizQuestion.json';

export default class QuizComponent extends Component {
  static propTypes = {
    pageNavigation: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      questions: quizData,
      currentIndex: 0,
      correctAnswers: 0,
    };
  }

  moveToNextQuestion = () => {
    if (this.state.currentIndex < this.state.questions.length - 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    } else {
      this.calculateResult();
    }
  };

  moveToPreviousQuestion = () => {
    if (this.state.currentIndex > 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    } else {
      alert('There are no previous questions.');
    }
  };

  confirmQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
        window.location.reload();
    }
  };

  handleAnswerClick = (selectedOption) => {
    const currentQuestion = this.state.questions[this.state.currentIndex];
    if (selectedOption === currentQuestion.answer) {
      this.setState((prevState) => ({
        correctAnswers: prevState.correctAnswers + 1,
      }));
    }
    this.moveToNextQuestion();
  };

  calculateResult = () => {
    const totalQuestions = this.state.questions.length;
    const percentage = (this.state.correctAnswers / totalQuestions) * 100;
    this.props.pageNavigation(2, percentage);
  };

  render() {
    const currentQuestion = this.state.questions[this.state.currentIndex];

    return (
      <div className='quiz-container'>
        <div className='quiz-box'>
          <h2 className='quiz-heading'>Question</h2>
          <div className='question-number'>
            <h4 className='question-number-text'>{this.state.currentIndex + 1} of {this.state.questions.length}</h4>
          </div>
          <div className='quiz-content'>
            <h4 className='question-text'>{currentQuestion.question}</h4>

            <div className='options-container'>
              <button className='option' onClick={() => this.handleAnswerClick(currentQuestion.optionA)}>{currentQuestion.optionA}</button>
              <button className='option' onClick={() => this.handleAnswerClick(currentQuestion.optionB)}>{currentQuestion.optionB}</button>
              <button className='option' onClick={() => this.handleAnswerClick(currentQuestion.optionC)}>{currentQuestion.optionC}</button>
              <button className='option' onClick={() => this.handleAnswerClick(currentQuestion.optionD)}>{currentQuestion.optionD}</button>
            </div>
          </div>

          <div className='quiz-buttons'>
            <button className='quiz-option prev-btn' onClick={this.moveToPreviousQuestion}>Previous</button>
            <button className='quiz-option next-btn' onClick={this.moveToNextQuestion}>Next</button>
            <button className='quiz-option quit-btn' onClick={this.confirmQuit}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
