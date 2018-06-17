import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavourites } from '../../actions';

import { DateList } from '../../components/DateList/DateList';

import Button from '@material-ui/core/Button';

export class Weather extends Component {
  render() {
    const { cities, addFavouritesAction } = this.props;
    const { city } = this.props.location.state;
    return (
      <div>
        <Button variant="contained"
                color="secondary"
                className="controls"
                onClick={() => {
                  addFavouritesAction(city)
                }}
        >Add to favourites</Button>
        <DateList cities={ cities }
                  city={ city }/>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    cities: state.weather.cities,
    city: state.weather.city,
  }
);

export default connect(mapStateToProps, {
  addFavouritesAction: addFavourites,
})(Weather);
