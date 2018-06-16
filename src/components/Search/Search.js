import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

  render() {
    const { value } = this.state;
    const { city, error, isFetching } = this.props;

    return (
      <div>
        <input
          type="text"
          value={ value }
          onChange={ this.handleChange }
        />
        <button onClick={ this.onButtonClick }>Search</button>
        <div>
          { !isFetching && !error && city && <Link to={ `/weather/${city}` }>{ city }</Link> }
          { isFetching && city && <p>Searching for weather in `${ city }`</p> }
          { !isFetching && error && city && <p>{ error }</p> }
        </div>
      </div>
    )
  }
}

export default Search;
