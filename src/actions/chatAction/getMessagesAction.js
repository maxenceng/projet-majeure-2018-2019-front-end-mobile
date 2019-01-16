import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage, axiosHeaders } from '../../helpers/common';

export const MESSAGES_REQUEST = 'MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_ERROR = 'MESSAGES_ERROR';

export const messagesRequest = createAction(MESSAGES_REQUEST);
export const messagesSuccess = createAction(MESSAGES_SUCCESS);
export const messagesError = createAction(MESSAGES_ERROR);

export default ({ email }) => (dispatch) => {
  dispatch(messagesRequest());
  return axios.post('allMessages', { email }, axiosHeaders())
    .then(res => dispatch(messagesSuccess(res)))
    .catch(err => dispatch(messagesError(getErrorMessage(err))));
};
