import { create } from 'apisauce';
import Config from 'react-native-config';

const baseURL = Config.API_URL;

const api = create({
  baseURL,
  timeout: 20000
});

export default api;
