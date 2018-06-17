import React, { Component } from 'react';
import { connect } from 'react-redux';

import { DateList } from '../../components/DateList/DateList';

import Button from '@material-ui/core/Button';

export class Weather extends Component {
  render() {
    const { cities, city } = this.props;
    return (
      <div>
        <Button variant="contained"
                color="secondary"
                className="controls"
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

export default connect(mapStateToProps)(Weather);
