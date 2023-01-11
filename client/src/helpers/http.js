import { host } from './axios';
import jwt_decode from 'jwt-decode';
import useAuthStore from '../store/useAuthStore';

const setToken = useAuthStore.getState().setToken;

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
  const { data } = await host.post('api/user/auth');
  const token = data.token;
  setToken(token);
  return jwt_decode(token);
};

export { registration, login, check };
