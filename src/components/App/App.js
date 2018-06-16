import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../containers/Home/Home';
// import Weather from '../../containers/Weather/Weather';

export const App = () =>
  (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/weather/:city" component={Weather} />*/}
        </div>
      </Router>
    </div>
  );

export default App;
