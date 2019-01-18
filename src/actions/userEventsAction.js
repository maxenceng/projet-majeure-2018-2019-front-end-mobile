import { createAction } from 'redux-actions';
import { AsyncStorage } from 'react-native';
import axios from '../helpers/axios';

export const GET_USER_EVENTS_REQUEST = 'GET_USER_EVENTS_REQUEST';
export const GET_USER_EVENTS_SUCCESS = 'GET_USER_EVENTS_SUCCESS';
export const GET_USER_EVENTS_ERROR = 'GET_USER_EVENTS_ERROR';

export const getUserEventRequest = createAction(GET_USER_EVENTS_REQUEST);
export const getUserEventSuccess = createAction(GET_USER_EVENTS_SUCCESS);
export const getUserEventError = createAction(GET_USER_EVENTS_ERROR);

export default () => (dispatch) => {
  dispatch(getUserEventRequest());
  const idUser = AsyncStorage.getItem('idUser');
  return axios.get(`userEvents?idUser=${idUser}`)
    .then(res => dispatch(getUserEventSuccess(res)))
    .catch(err => dispatch(getUserEventError(err)));
};
