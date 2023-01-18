import { host, authHost } from './axios';
import jwt_decode from 'jwt-decode';
import useTokenStore from '../store/useTokenStore';

const setToken = useTokenStore.getState().setToken;

const registration = async ({ email, password, roles }) => {
  const { data } = await host.post('api/user/registration', { email, password, roles: 'USER' });
  const token = data.token;
  setToken(token);
  return jwt_decode(token);
};

const login = async ({ email, password }) => {
  const { data } = await host.post('api/user/login', { email, password });
  const token = data.token;
  setToken(token);
  return jwt_decode(token);
};

const check = async () => {
  const { data } = await authHost.get('api/user/auth');
  const token = data.token;
  setToken(token);
  return jwt_decode(token);
};

export { registration, login, check };
