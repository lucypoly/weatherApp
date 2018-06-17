import React, { Component } from 'react';
// import Plot from 'react-plotly.js';

export class DateWeather extends Component {
  render() {
    return (
      <div>{this.props.location.state.dateData[0].weather[0].description}</div>
    )
  }
}

export default DateWeather;
