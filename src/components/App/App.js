import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Home from '../../containers/Home/Home';
import Weather from '../../containers/Weather/Weather';

export const App = () =>
  (
    <div>
      <Router>
        <div>
          <AppBar position="static"
            color="default">
            <Toolbar>
              <Link to={ `/` }
                className="link">
                <Typography variant="title"
                  color="inherit">
                  Lucy Weather
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
          <Route exact
            path="/"
            component={ Home } />
          <Route exact
            path="/weather/:city"
            component={ Weather } />
        </div>
      </Router>
    </div>
  );

export default App;
