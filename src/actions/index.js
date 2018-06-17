import request from 'axios';
import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR } from '../constants/actions';
import { TOKEN } from '../constants/token';
import { handleError } from '../helpers';

export const getWeather = city => (dispatch) => {
  dispatch({
    type: GET_WEATHER_REQUEST,
    payload: city,
  });

  request.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${TOKEN}`)
    .then((result) => {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: result.data.list,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_WEATHER_ERROR,
        payload: handleError(error),
      });
    });
};
