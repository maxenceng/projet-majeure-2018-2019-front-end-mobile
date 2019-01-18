import { SET_CURRENT_CONV } from '../actions/currentConvAction';

const defaultState = {
  idUser: '',
  person: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_CONV:
      return action.payload;
    default:
      return state;
  }
};
