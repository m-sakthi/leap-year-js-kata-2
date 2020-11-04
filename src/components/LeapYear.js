import React, { Component } from 'react';

export default class LeapYear extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: '',
      error: 'Enter a valid year.'
    };
  }

  divisibleBy400 = () => (this.state.year % 400 === 0);

  divisibleBy100 = () => (this.state.year % 100 === 0);

  divisibleBy100AndNotBy400 = () => this.divisibleBy100() && !this.divisibleBy400();

  isLeapYear = () => this.divisibleBy400() && !this.divisibleBy100AndNotBy400();

  handleInputChange = (e) => {
    const { value } = e.target;

    if (value > 0) this.setState({ year: value, error: null });
    else this.setState({
      year: value,
      error: 'Enter a valid year!'
    });
  }

  render() {
    const { year, error } = this.state;

    return (
      <div testId='wrapper'>
        <label>Enter year: </label>
        <input
          testId='enterYearInput'
          type='number'
          onChange={this.handleInputChange}
        />
        <br />
        <br />
        <span testId="resultSpan">
          {error ? error : `Entered year ${year} is${this.isLeapYear() ? '' : ' not'} leap year.`}
        </span>
      </div>
    );
  }
}