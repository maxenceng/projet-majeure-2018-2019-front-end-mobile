import { createAction } from 'redux-actions';
import axios from '../../helpers/axios';
import { axiosHeaders } from '../../helpers/common';

export const EVENTS_BY_FILTER_REQUEST = 'EVENTS_BY_FILTER_REQUEST';
export const EVENTS_BY_FILTER_SUCCESS = 'EVENTS_BY_FILTER_SUCCESS';
export const EVENTS_BY_FILTER_ERROR = 'EVENTS_BY_FILTER_ERROR';

export const eventByFilterRequest = createAction(EVENTS_BY_FILTER_REQUEST);
export const eventByFilterSuccess = createAction(EVENTS_BY_FILTER_SUCCESS);
export const eventByFilterError = createAction(EVENTS_BY_FILTER_ERROR);

export default name => async (dispatch) => {
  dispatch(eventByFilterRequest());
  return axios.get(`eventsByName?name=${name}`, await axiosHeaders())
    .then(res => dispatch(eventByFilterSuccess(res)))
    .catch(err => dispatch(eventByFilterError(err)));
};
