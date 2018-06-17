import React, { Component } from 'react';

import Search from '../../components/Search/Search';
import CityCard from '../../components/CityCard/CityCard';

import { connect } from 'react-redux';

import { getWeather } from '../../actions';

export class Home extends Component {

  render() {
    const { isFetching, city, cities, error, getWeatherAction, favourites } = this.props;

    return (
      <div>
        <Search getWeatherAction={ getWeatherAction }
                isFetching={ isFetching }
                error={ error }
                cities={ cities }
                city={ city }/>
        {!!favourites.length && (<h1>Favourites</h1>)}
        <div className="cards">
          {favourites.map(key => <CityCard key={ key }
                                           city={ key }/>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    isFetching: state.weather.fetching,
    city: state.weather.city,
    cities: state.weather.cities,
    error: state.weather.error,
    favourites: state.favourites
  }
);

export default connect(mapStateToProps, {
  getWeatherAction: getWeather,
})(Home);
