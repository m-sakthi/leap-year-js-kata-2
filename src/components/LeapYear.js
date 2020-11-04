import React, { Component } from 'react';

export default class LeapYear extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ year: e.target.value });
  }

  render() {
    const { year } = this.state;

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
          {year && `Entered year is ${year}.`}
        </span>
      </div>
    );
  }
}