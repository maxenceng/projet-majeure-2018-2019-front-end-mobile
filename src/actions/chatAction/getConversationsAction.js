import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage, axiosHeaders, getAsyncStorageItem } from '../../helpers/common';

export const CONVERSATIONS_REQUEST = 'CONVERSATIONS_REQUEST';
export const CONVERSATIONS_SUCCESS = 'CONVERSATIONS_SUCCESS';
export const CONVERSATIONS_ERROR = 'CONVERSATIONS_ERROR';

export const conversationRequest = createAction(CONVERSATIONS_REQUEST);
export const conversationSuccess = createAction(CONVERSATIONS_SUCCESS);
export const conversationError = createAction(CONVERSATIONS_ERROR);

export default () => async (dispatch) => {
  dispatch(conversationRequest());
  const idUser = await getAsyncStorageItem('idUser');
  return axios.get(`userConv?idUser=${idUser}`, await axiosHeaders())
    .then(res => dispatch(conversationSuccess(res)))
    .catch(err => dispatch(conversationError(getErrorMessage(err))));
};
