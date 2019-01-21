import { AsyncStorage } from 'react-native';

export const BASE_URL = 'http://192.168.43.149:3001';

export const getAsyncStorageItem = async key => AsyncStorage.getItem(key);

export const getJwtToken = async () => {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch (error) {
    return error;
  }
};

export const axiosHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getAsyncStorageItem('userToken')}`,
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
