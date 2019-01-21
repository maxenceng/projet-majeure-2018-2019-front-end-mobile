import { LOCATION } from '../actions/locationAction';

const defaultState = {
  lng: 0,
  lat: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOCATION:
      return action.payload;
    default:
      return state;
  }
};
