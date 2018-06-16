import React, { Component } from 'react';
import { DateList } from '../../components/DateList/DateList';
import { connect } from 'react-redux';

export class Weather extends Component {
  render() {
    const { cities } = this.props;
    return (
      <DateList cities={ cities } />
    );
  }
}

const mapStateToProps = state => (
  {
    cities: state.weather.cities,
  }
);

export default connect(mapStateToProps)(Weather);
