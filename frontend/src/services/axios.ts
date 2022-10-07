import Axios from 'axios';
import { getToken } from '../utils/localStorage';

const axios = () => Axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default axios;
