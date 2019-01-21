import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { axiosHeaders, getAsyncStorageItem } from '../helpers/common';

export const GET_INTERESTED_EVENT_REQUEST = 'PARTICIPATE_EVENT_REQUEST';
export const GET_INTERESTED_EVENT_SUCCESS = 'PARTICIPATE_EVENT_SUCCESS';
export const GET_INTERESTED_EVENT_ERROR = 'PARTICIPATE_EVENT_ERROR';

export const getInterestedRequest = createAction(GET_INTERESTED_EVENT_REQUEST);
export const getInterestedSuccess = createAction(GET_INTERESTED_EVENT_SUCCESS);
export const getInterestedError = createAction(GET_INTERESTED_EVENT_ERROR);

export default ({ idEvent }) => async (dispatch) => {
  dispatch(getInterestedRequest());
  const idUser = await getAsyncStorageItem.getItem('idUser');
  return axios.get(`usersInterestedEvent?idUser=${idUser}&idEvent=${idEvent}`, axiosHeaders())
    .then(res => dispatch(getInterestedSuccess(res)))
    .catch(err => dispatch(getInterestedError(err)));
};
