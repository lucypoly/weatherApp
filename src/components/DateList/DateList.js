import React, { Component } from 'react';


export class DateList extends Component {

  componentDidMount() {
    this.getDates();
  }

  getDates() {
    const { cities } = this.props;
    const list = cities[this.props.match.params.city];
    const dates = {};
    for (let i = 0; i < list.length; i++) {
      const stringDate = list[i].dt_txt.substr(0, list[i].dt_txt.indexOf(' '));
      if (dates[stringDate]) {
        dates[stringDate] = [...dates[stringDate], list[i]];
      } else {
        dates[stringDate] = [list[i]];
      }
    }
  }

  render() {
    const { cities } = this.props;

    return (
      <Date />
    );
  }
}


export default DateList;
