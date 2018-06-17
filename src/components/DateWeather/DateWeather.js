import React, { Component } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import Button from '@material-ui/core/Button';

import { WEATHER } from '../../constants/weather';
import { getAverage } from '../../helpers';

import './DateWeather.css';

export class DateWeather extends Component {
  getPressure(date) {
    const presArr = [];
    date.forEach(time => presArr.push(+time.main.pressure));
    return Math.round(getAverage(presArr));
  }

  buildPlot(date) {
    return date.map(slot => {
      let temp = Math.round(+slot.main.temp - 273.15);
      let hour = new Date(slot.dt * 1000).getHours();
      hour = hour === 0 ? 24 : hour;
      return { x: hour, y: temp };
    });
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { state } = this.props.location;
    return (
      <div>
        <Button variant="contained"
                color="primary"
                className="controls"
                onClick={this.goBack}>Back</Button>
        <div className="date-weather">
          <h2 className="city-name">{ state.city }
            <img src={ WEATHER[state.weather] }
                 alt={ state.weather }/>
            <span>{ state.date }</span>
          </h2>
          <span>Average temperature: { state.temp } C</span>
          <span>Average pressure: { this.getPressure(state.dateData) } P</span>
          <h3>Temperature chart:</h3>
          <LineChart width={ 600 }
                     height={ 300 }
                     data={ this.buildPlot(state.dateData) }
                     margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone"
                  dataKey="y"
                  stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc"
                           strokeDasharray="5 5"/>
            <XAxis dataKey="x"/>
            <YAxis />
          </LineChart>
        </div>
      </div>
    )
  }
}

export default DateWeather;
