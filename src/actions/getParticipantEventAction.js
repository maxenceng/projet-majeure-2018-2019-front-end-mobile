import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { getAsyncStorageItem } from '../helpers/common';

export const GET_PARTICIPANT_REQUEST = 'GET_PARTICIPANT_REQUEST';
export const GET_PARTICIPANT_SUCCESS = 'GET_PARTICIPANT_SUCCESS';
export const GET_PARTICIPANT_ERROR = 'GET_PARTICIPANT_ERROR';

export const getParticipantRequest = createAction(GET_PARTICIPANT_REQUEST);
export const getParticipantSuccess = createAction(GET_PARTICIPANT_SUCCESS);
export const getParticipantError = createAction(GET_PARTICIPANT_ERROR);

export default ({ idEvent }) => async (dispatch) => {
  dispatch(getParticipantRequest());
  const idUser = await getAsyncStorageItem('idUser');
  return axios.get(`event?idEvent=${idEvent}&idUser=${idUser}`)
    .then(res => dispatch(getParticipantSuccess(res)))
    .catch(err => dispatch(getParticipantError(err)));
};
