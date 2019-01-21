import { SWITCH_EVENT_MODE_REQUEST, SWITCH_EVENT_MODE_SUCCESS, SWITCH_EVENT_MODE_ERROR } from '../actions/switchEventModeAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_EVENT_MODE_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case SWITCH_EVENT_MODE_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload,
        isFetching: false,
      };
    case SWITCH_EVENT_MODE_ERROR:
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
