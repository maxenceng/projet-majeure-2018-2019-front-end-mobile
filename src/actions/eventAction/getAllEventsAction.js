import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { getErrorMessage, axiosHeaders, getAsyncStorageItem } from '../../helpers/common';

export const ALL_EVENTS_REQUEST = 'ALL_EVENTS_REQUEST';
export const ALL_EVENTS_SUCCESS = 'ALL_EVENTS_SUCCESS';
export const ALL_EVENTS_ERROR = 'ALL_EVENTS_ERROR';

export const allEventsRequest = createAction(ALL_EVENTS_REQUEST);
export const allEventsSuccess = createAction(ALL_EVENTS_SUCCESS);
export const allEventsError = createAction(ALL_EVENTS_ERROR);

export default ({
  date,
  location,
}) => async (dispatch) => {
  dispatch(allEventsRequest());
  const loc = typeof location === 'object' ? (JSON.stringify(location)) : (location);
  const idUser = await getAsyncStorageItem('idUser');
  return axios.get(
    `allEvents?idUser=${idUser}&date=${date}&location=${loc}`,
    axiosHeaders(),
  )
    .then(res => dispatch(allEventsSuccess(res)))
    .catch(err => dispatch(allEventsError(getErrorMessage(err))));
};
