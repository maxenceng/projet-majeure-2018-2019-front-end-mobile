import { CONVERSATIONS_REQUEST, CONVERSATIONS_SUCCESS, CONVERSATIONS_ERROR } from '../actions/chatAction/getConversationsAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONVERSATIONS_REQUEST:
      return {
        ...state,
        err: null,
        data: {},
        isFetching: true,
      };
    case CONVERSATIONS_SUCCESS:
      return {
        ...state,
        err: null,
        data: action.payload.data,
        isFetching: false,
      };
    case CONVERSATIONS_ERROR:
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
