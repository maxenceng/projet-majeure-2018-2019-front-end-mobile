import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { axiosHeaders, getAsyncStorageItem } from '../helpers/common';


export const GET_FAVORITE_STATUS_REQUEST = 'GET_FAVORITE_STATUS_REQUEST';
export const GET_FAVORITE_STATUS_SUCCESS = 'GET_FAVORITE_STATUS_SUCCESS';
export const GET_FAVORITE_STATUS_ERROR = 'GET_FAVORITE_STATUS_ERROR';

export const getFavoriteStatusRequest = createAction(GET_FAVORITE_STATUS_REQUEST);
export const getFavoriteStatusSuccess = createAction(GET_FAVORITE_STATUS_SUCCESS);
export const getFavoriteStatustError = createAction(GET_FAVORITE_STATUS_ERROR);

export default idEvent => async (dispatch) => {
  dispatch(getFavoriteStatusRequest());
  const idUser = await getAsyncStorageItem.getItem('idUser');
  return axios.get(`userFavoriteEvent?idUser=${idUser}&idEvent=${idEvent}`, await axiosHeaders())
    .then(res => dispatch(getFavoriteStatusSuccess(res)))
    .catch(err => dispatch(getFavoriteStatustError(err)));
};
