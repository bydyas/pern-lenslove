import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import useTokenStore from '../store/useTokenStore';
import useUserStore from '../store/useUserStore';
import { login, registration, check } from '../helpers/http';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { parseRoles } from '../helpers/db';

export function useAuth() {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setToken = useTokenStore((state) => state.setToken);
  const { setUser, clearUser } = useUserStore((state) => ({
    setUser: state.setUser,
    clearUser: state.clearUser,
  }));
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const authWithEmailAndPassword = async (type, credentials, roles) => {
    setIsLoading(true);
    try {
      let response;

      switch (type) {
        case 'LOGIN':
          response = await login(credentials);
          break;
        case 'REGISTRATION':
          response = await registration({ ...credentials, roles });
          break;
        case 'CHECK':
          response = await check();
          break;
        default:
          throw new Error('Invalid authorization type');
      }

      const userData = {
        ...response,
        roles: parseRoles(response.roles),
      };

      setUser(userData);
      setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      const { message } = error.response.data;
      setIsError(message);
    }
    setIsLoading(false);
  };

  const logOut = () => {
    navigate(SHOP_ROUTE);
    setIsAuth(false);
    clearUser();
    setToken('');
  };

  return { authWithEmailAndPassword, logOut, isLoading, isError };
}
