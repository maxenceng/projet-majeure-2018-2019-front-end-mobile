import { MESSAGES_REQUEST, MESSAGES_SUCCESS, MESSAGES_ERROR } from '../actions/chatAction/getMessagesAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case MESSAGES_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case MESSAGES_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: false,
      };
    case MESSAGES_ERROR:
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
