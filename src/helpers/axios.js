import axios from 'axios';
import { BASE_URL } from './common';

export default axios.create({
  baseURL: BASE_URL,
});
