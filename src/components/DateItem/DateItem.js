import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { WEATHER } from '../../constants/weather';

import './DateItem.css';

const DateItem = (props) => (
  <div>
    { props && (
      <Link to={{
        pathname: `/weather/${props.city}/${ props.date }`,
        state: { dateData: props.dateData }
      }}
            className="link">
        <Card className="card">
          <img src={ WEATHER[props.weather] }
               alt={ props.weather }/>
          <CardContent>
            <Typography gutterBottom
                        variant="headline"
                        component="h2">
              { props.date }
            </Typography>
            <Typography gutterBottom
                        variant="headline"
                        component="h2">
              { Math.round(props.temperature) } C
            </Typography>
          </CardContent>
        </Card>
      </Link>)}
  </div>
);

export default DateItem;
