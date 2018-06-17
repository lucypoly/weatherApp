import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CityCard = (props) => (
  <div>
    { props && (
      <Link
        to={{
          pathname: `/weather/${props.city}`,
          state: { city: props.city }
        }}
        className="link">
        <Card className="city-card">
          <CardContent>
            <Typography variant="headline"
                        component="h2">
              { props.city }
            </Typography>
          </CardContent>
        </Card>
      </Link>)}
  </div>
);

export default CityCard;
