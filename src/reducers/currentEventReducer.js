import { SET_CURRENT_EVENT } from '../actions/currentEventAction';

export default (state = '', action) => {
  switch (action.type) {
    case SET_CURRENT_EVENT:
      return action.payload;
    default:
      return state;
  }
};
