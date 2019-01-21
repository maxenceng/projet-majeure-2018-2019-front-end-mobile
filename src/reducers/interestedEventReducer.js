import { GET_INTERESTED_EVENT_REQUEST, GET_INTERESTED_EVENT_SUCCESS, GET_INTERESTED_EVENT_ERROR } from '../actions/getInterestedEventAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_INTERESTED_EVENT_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };

    case GET_INTERESTED_EVENT_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: true,
      };
    case GET_INTERESTED_EVENT_ERROR:
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
