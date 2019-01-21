import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage, axiosHeaders, getAsyncStorageItem } from '../../helpers/common';

export const MESSAGES_REQUEST = 'MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_ERROR = 'MESSAGES_ERROR';

export const messagesRequest = createAction(MESSAGES_REQUEST);
export const messagesSuccess = createAction(MESSAGES_SUCCESS);
export const messagesError = createAction(MESSAGES_ERROR);

export default idSecondUser => async (dispatch) => {
  dispatch(messagesRequest());
  const idUser = await getAsyncStorageItem('idUser');
  return axios.get(`conv?idUser=${idUser}&idSecondUser=${idSecondUser}`, axiosHeaders())
    .then(res => dispatch(messagesSuccess(res)))
    .catch(err => dispatch(messagesError(getErrorMessage(err))));
};
