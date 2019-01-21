import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getAsyncStorageItem } from '../../helpers/common';

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';

export const getProfileRequest = createAction(GET_PROFILE_REQUEST);
export const getProfileSuccess = createAction(GET_PROFILE_SUCCESS);
export const getProfileError = createAction(GET_PROFILE_ERROR);

export default () => async (dispatch) => {
  dispatch(getProfileRequest());
  const idUser = await getAsyncStorageItem('idUser');
  return axios.get(`userProfile?idUser=${idUser}`)
    .then(res => dispatch(getProfileSuccess(res)))
    .catch(err => dispatch(getProfileError(err)));
};
