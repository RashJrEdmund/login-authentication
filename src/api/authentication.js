import { httpClient } from 'axios';
import { API_BASE_URL } from '../contants';

const register = (user) => {
  return httpClient.post('users');
};

const loging = () => {}
