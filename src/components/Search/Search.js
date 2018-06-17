import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Search.css';

export class Search extends Component {
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

  renderCard(city) {
    return (
      <Link to={ `/weather/${city}` }
            className="link">
        <Card className="city-card">
          <CardContent>
            <Typography variant="headline"
                        component="h2">
              { city }
            </Typography>
          </CardContent>
        </Card>
      </Link>
    )
  }

  render() {
    const { value } = this.state;
    const { city, error, isFetching } = this.props;

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
        <div>
          { !isFetching && !error && city && this.renderCard(city) }
          { isFetching && city && (<CircularProgress />) }
          { !isFetching && error && city && (<h1 className="error">{ error } :(</h1>) }
        </div>
      </div>
    )
  }
}
