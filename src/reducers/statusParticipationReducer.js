import { GET_PARTICIPATION_STATUS_SUCCESS } from '../actions/getStatusParticipationAction';

const defaultState = {
  err: null,
  data: {},
  isFetching: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PARTICIPATION_STATUS_SUCCESS:
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
