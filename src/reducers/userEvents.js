import { GET_USER_EVENTS_REQUEST, GET_USER_EVENTS_SUCCESS, GET_USER_EVENTS_ERROR } from '../actions/userEventsAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_EVENTS_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case GET_USER_EVENTS_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: false,
      };
    case GET_USER_EVENTS_ERROR:
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
