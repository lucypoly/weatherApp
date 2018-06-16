import React, { Component } from 'react';


export class DateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: {},
    };
  }

  componentDidMount() {
    const dates = this.getDates();
    this.setState({ dates })
  }

  getTemperature(date) {
    const tempArr = [];
    date.forEach(time => tempArr.push(+time.main.temp - 273.15));
    return this.getAverage(tempArr);
  }

  getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i], 10);
    }
    return sum / arr.length;
  }

  getDates() {
    const { cities, city } = this.props;
    const list = cities[city];
    const dates = {};
    for (let i = 0; i < list.length; i++) {
      const stringDate = list[i].dt_txt.substr(0, list[i].dt_txt.indexOf(' '));
      if (dates[stringDate]) {
        dates[stringDate] = [...dates[stringDate], list[i]];
      } else {
        dates[stringDate] = [list[i]];
      }
    }
    return dates;
  }

  render() {

    return (
      <div>
        {
          Object.keys(this.state.dates).length && Object.keys(this.state.dates).map(key => (
            <div key={ key }>{ this.getTemperature(this.state.dates[key]) }</div>
          ))
        }
      </div>
    );
  }
}


export default DateList;
