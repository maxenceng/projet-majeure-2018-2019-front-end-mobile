import { GET_PROFILE_SUCCESS } from '../actions/profileAction/getProfileAction';
import { PROFILE_SAVE_SUCCESS } from '../actions/profileAction/profileSaveAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PROFILE_SAVE_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload,
        isFetching: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: true,
      };
    default:
      return state;
  }
};
