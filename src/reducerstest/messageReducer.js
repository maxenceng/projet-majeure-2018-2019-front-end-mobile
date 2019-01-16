import { SAY_MESSAGE } from '../actions/messageAction';

export default (state = '', action) => {
  switch (action.type) {
    case SAY_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
