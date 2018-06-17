import { combineReducers } from 'redux';
import weather from './weather';
import favourites from './favourites';

export default combineReducers({
  weather,
  favourites
});
