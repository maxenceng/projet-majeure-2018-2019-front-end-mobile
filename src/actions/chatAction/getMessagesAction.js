import { createAction } from 'redux-actions';
import { AsyncStorage } from 'react-native';
import axios from '../../helpers/axios';
import { getErrorMessage, axiosHeaders } from '../../helpers/common';

export const MESSAGES_REQUEST = 'MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_ERROR = 'MESSAGES_ERROR';

export const messagesRequest = createAction(MESSAGES_REQUEST);
export const messagesSuccess = createAction(MESSAGES_SUCCESS);
export const messagesError = createAction(MESSAGES_ERROR);

export default idSecondUser => (dispatch) => {
  dispatch(messagesRequest());
  const idUser = process.browser && AsyncStorage.getItem('idUser');
  console.log(`conv?idUser=${idUser}&idSecondUser=${idSecondUser}`);
  return axios.get(`conv?idUser=${idUser}&idSecondUser=${idSecondUser}`, axiosHeaders())
    .then(res => dispatch(messagesSuccess(res)))
    .catch(err => dispatch(messagesError(getErrorMessage(err))));
};
