import { GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS, GET_WEATHER_ERROR } from '../constants/actions';

const initialState = {
  cities: {},
  error: '',
  fetching: false,
};

export default function feed(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return { ...state, city: action.payload, fetching: true, error: '' };

    case GET_WEATHER_SUCCESS:
      return state.cities[action.payload] ?
        { ...state, cities: state.cities, fetching: false, error: '' } :
        { ...state, cities: { ...state.cities, [state.city]: action.payload }, fetching: false, error: '' };

    case GET_WEATHER_ERROR:
      return { ...state, cities: state.cities, error: action.payload, fetching: false };

    default:
      return state;
  }
}
