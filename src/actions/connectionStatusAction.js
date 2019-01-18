import { AsyncStorage } from 'react-native';
import { createAction } from 'redux-actions';

export const CONNECTION_STATUS = 'CONNECTION_STATUS';

const setConnectionStatus = createAction(CONNECTION_STATUS);

export default status => (dispatch) => {
  if (process.browser && !status) {
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('idUser');
  }
  dispatch(setConnectionStatus(status));
};
