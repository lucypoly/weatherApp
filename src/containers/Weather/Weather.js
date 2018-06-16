import React, { Component } from 'react';
import { Search } from '../../components/Search/Search';

import { connect } from 'react-redux';

import { getWeather } from '../../actions';

export class Home extends Component {

  render() {
    const { isFetching, city, error, getWeatherAction } = this.props;

    return (
      <div>
        <Search getWeatherAction={ getWeatherAction }
          isFetching={ isFetching }
          error={ error }
          city={ city } />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    isFetching: state.weather.fetching,
    city: state.weather.city,
    list: state.weather.list,
  }
);

export default connect(mapStateToProps, {
  getWeatherAction: getWeather,
})(Home);
