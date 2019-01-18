import { GET_PARTICIPANT_SUCCESS } from '../actions/getParticipantEventAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PARTICIPANT_SUCCESS:
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
