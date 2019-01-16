import { CONNECTION_STATUS } from '../actions/connectionStatusAction';

export default (state = false, action) => {
  switch (action.type) {
    case CONNECTION_STATUS:
      return action.payload;
    default:
      return state;
  }
};
