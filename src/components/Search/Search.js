import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import  CityCard from '../CityCard/CityCard';

import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onButtonClick = () => {
    this.props.getWeatherAction(this.state.value);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    const { city, error, isFetching, cities } = this.props;

    return (
      <div>
        <div className="centered">
          <TextField
            id="name"
            label="City"
            value={ value }
            onChange={ this.handleChange }
            margin="none"
          />
          <Button size="medium"
                  className="button"
                  color="primary"
                  variant="contained"
                  onClick={ this.onButtonClick }>Search</Button>
        </div>
        <div className="cards">
          { !isFetching && !error && city &&
          Object.keys(cities).map(key => <CityCard key={ key }
                                                   city={ key }/>) }
          { isFetching && city && (<CircularProgress />) }
          { !isFetching && error && city && (<h1 className="error">{ error } :(</h1>) }
        </div>
      </div>
    )
  }
}
