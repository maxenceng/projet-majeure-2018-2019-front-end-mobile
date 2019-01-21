import { ALL_EVENTS_REQUEST, ALL_EVENTS_SUCCESS, ALL_EVENTS_ERROR } from '../actions/eventAction/getAllEventsAction';
import { EVENTS_BY_FILTER_REQUEST, EVENTS_BY_FILTER_SUCCESS, EVENTS_BY_FILTER_ERROR } from '../actions/eventAction/getEventByFilterAction';
import { EVENTS_FOR_ME_REQUEST, EVENTS_FOR_ME_SUCCESS, EVENTS_FOR_ME_ERROR } from '../actions/getEventForMeAction';

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
    case EVENTS_BY_FILTER_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case EVENTS_BY_FILTER_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: false,
      };
    case EVENTS_BY_FILTER_ERROR:
      return {
        ...state,
        err: action.payload,
        data: {},
        isFetching: false,
      };
    case EVENTS_FOR_ME_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case EVENTS_FOR_ME_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: false,
      };
    case EVENTS_FOR_ME_ERROR:
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
