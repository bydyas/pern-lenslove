import axios from 'axios';

import useTokenStore from '../store/useTokenStore';

const token = useTokenStore.getState().token;

const host = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

const authHost = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);

export { host, authHost };
