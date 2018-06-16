import React, { Component } from 'react';
import { DateList } from '../../components/DateList/DateList';
import { connect } from 'react-redux';

export class Weather extends Component {
  render() {
    const { cities, city } = this.props;
    return (
      <DateList cities={ cities }
        city={ city } />
    );
  }
}

const mapStateToProps = state => (
  {
    cities: state.weather.cities,
    city: state.weather.city,
  }
);

export default connect(mapStateToProps)(Weather);
