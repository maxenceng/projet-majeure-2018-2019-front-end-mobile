import { ALL_EVENTS_REQUEST, ALL_EVENTS_SUCCESS, ALL_EVENTS_ERROR } from '../actions/eventAction/getAllEventsAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ALL_EVENTS_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case ALL_EVENTS_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: false,
      };
    case ALL_EVENTS_ERROR:
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
