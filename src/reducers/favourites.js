import { ADD_FAVOURITES } from '../constants/actions';

const favourites = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      state = state.indexOf(action.city) !==-1 ? state : [...state, action.city];
      return state;
    default:
      return state;
  }
};

export default favourites;
