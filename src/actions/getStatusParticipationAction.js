import { createAction } from 'redux-actions';
import { getAsyncStorageItem } from '../helpers/common';
import axios from '../helpers/axios';

export const GET_PARTICIPATION_STATUS_REQUEST = 'GET_PARTICIPATION_STATUS_REQUEST';
export const GET_PARTICIPATION_STATUS_SUCCESS = 'GET_PARTICIPATION_STATUS_SUCCESS';
export const GET_PARTICIPATION_STATUS_ERROR = 'GET_PARTICIPATION_STATUS_ERROR';

export const getParticipationStatusRequest = createAction(GET_PARTICIPATION_STATUS_REQUEST);
export const getParticipationStatusSuccess = createAction(GET_PARTICIPATION_STATUS_SUCCESS);
export const getParticipationStatustError = createAction(GET_PARTICIPATION_STATUS_ERROR);

export default idEvent => async (dispatch) => {
  dispatch(getParticipationStatusRequest());
  const idUser = await getAsyncStorageItem('idUser');
  return axios.get(`userParticipateEvent?idUser=${idUser}&idEvent=${idEvent}`)
    .then(res => dispatch(getParticipationStatusSuccess(res)))
    .catch(err => dispatch(getParticipationStatustError(err)));
};
