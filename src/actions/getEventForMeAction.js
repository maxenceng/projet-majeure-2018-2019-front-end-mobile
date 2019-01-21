import { createAction } from 'redux-actions';
import axios from '../helpers/axios';
import { getErrorMessage, axiosHeaders, getAsyncStorageItem } from '../helpers/common';

export const EVENTS_FOR_ME_REQUEST = 'EVENTS_FOR_ME_REQUEST';
export const EVENTS_FOR_ME_SUCCESS = 'EVENTS_FOR_ME_SUCCESS';
export const EVENTS_FOR_ME_ERROR = 'EVENTS_FOR_ME_ERROR';

export const eventsForMeRequest = createAction(EVENTS_FOR_ME_REQUEST);
export const eventsForMeSuccess = createAction(EVENTS_FOR_ME_SUCCESS);
export const eventsForMeError = createAction(EVENTS_FOR_ME_ERROR);

export default () => async (dispatch) => {
  dispatch(eventsForMeRequest());
  const idUser = await getAsyncStorageItem.getItem('idUser');
  return axios.get(
    `relatedProfileEvents?idUser=${idUser}`,
    axiosHeaders(),
  )
    .then(res => dispatch(eventsForMeSuccess(res)))
    .catch(err => dispatch(eventsForMeError(getErrorMessage(err))));
};
