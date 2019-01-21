import { createAction } from 'redux-actions';
// import { getAsyncStorageItem } from '../helpers/common';

export const SWITCH_EVENT_MODE_REQUEST = 'SWITCH_EVENT_MODE_REQUEST';
export const SWITCH_EVENT_MODE_SUCCESS = 'SWITCH_EVENT_MODE_SUCCESS';
export const SWITCH_EVENT_MODE_ERROR = 'SWITCH_EVENT_MODE_ERROR';

export const switchEventModeRequest = createAction(SWITCH_EVENT_MODE_REQUEST);
export const switchEventModeSuccess = createAction(SWITCH_EVENT_MODE_SUCCESS);
export const switchEventModeError = createAction(SWITCH_EVENT_MODE_ERROR);

export default () => async (dispatch) => {
  dispatch(switchEventModeRequest());
  /*
   const idUser = await getAsyncStorageItem('idUser');
  if (mode !== null) {
    dispatch(switchEventModeSuccess(mode));
    return mode;
  }
  */
  dispatch(switchEventModeError());
  return '';
};
