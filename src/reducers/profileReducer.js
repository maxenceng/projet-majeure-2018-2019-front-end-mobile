import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_ERROR } from '../actions/profileAction/getProfileAction';
import { PROFILE_SAVE_REQUEST, PROFILE_SAVE_SUCCESS, PROFILE_SAVE_ERROR } from '../actions/profileAction/profileSaveAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case PROFILE_SAVE_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case PROFILE_SAVE_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: true,
      };
    case PROFILE_SAVE_ERROR:
      return {
        ...state,
        err: action.payload,
        data: {},
        isFetching: false,
      };
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: true,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        err: action.payload,
        data: {},
        isFetching: false,
      };
    default:
      return state;
  }
};
