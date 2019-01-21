import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { getAsyncStorageItem, axiosHeaders } from '../helpers/common';

export const GET_USER_EVENTS_REQUEST = 'GET_USER_EVENTS_REQUEST';
export const GET_USER_EVENTS_SUCCESS = 'GET_USER_EVENTS_SUCCESS';
export const GET_USER_EVENTS_ERROR = 'GET_USER_EVENTS_ERROR';

export const getUserEventRequest = createAction(GET_USER_EVENTS_REQUEST);
export const getUserEventSuccess = createAction(GET_USER_EVENTS_SUCCESS);
export const getUserEventError = createAction(GET_USER_EVENTS_ERROR);

export default () => async (dispatch) => {
  dispatch(getUserEventRequest());
  const idUser = await getAsyncStorageItem('idUser');
  return axios.get(`userEvents?idUser=${idUser}`, axiosHeaders())
    .then(res => dispatch(getUserEventSuccess(res)))
    .catch(err => dispatch(getUserEventError(err)));
};
