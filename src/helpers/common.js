import { AsyncStorage } from 'react-native';

export const BASE_URL = 'http://192.168.43.149:3001';

export const getAsyncStorageItem = async key => AsyncStorage.getItem(key);

export const getJwtToken = async () => {
  try {
    return await getAsyncStorageItem('userToken');
  } catch (error) {
    return error;
  }
};

export const axiosHeaders = async () => ({
  headers: {
    Authorization: `Bearer ${await getAsyncStorageItem('userToken')}`,
  },
});

export const getErrorMessage = (err) => {
  const { data } = err.response;
  if (!data) return null;
  return data.message || data.error || data.err;
};

const monthArray = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

const date = timestamp => new Date(parseInt(timestamp, 10));

export const getDay = timestamp => date(timestamp).getDate();

export const getMonth = timestamp => monthArray[date(timestamp).getMonth()];

export const COLOR_PRIMARY = '#154a6d';
export const COLOR_TITLE = '#072c46';
export const COLOR_SECONDARY = '#ffffd7';
export const COLOR_SEARCH = '#5c5c5c';
export const COLOR_BG_PRIMARY = '#ffffff';
export const COLOR_TERCIARY = '#cf3f26';
export const COLOR_HOVER = '#8a5300';
