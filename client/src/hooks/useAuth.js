import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import useUserStore from '../store/useUserStore';
import { login, registration } from '../helpers/http';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { parseRoles } from '../helpers/db';

export function useAuth() {
  const { setIsAuth, setToken } = useAuthStore((state) => ({
    setIsAuth: state.setIsAuth,
    setToken: state.setToken,
  }));
  const { setUser, clearUser } = useUserStore((state) => ({
    setUser: state.setUser,
    clearUser: state.clearUser,
  }));
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const authWithEmaiAndPassword = async (type, credentials, roles) => {
    setIsLoading(true);
    try {
      let response;

      if (type === 'LOGIN') {
        response = await login(credentials);
      } else {
        response = await registration({ ...credentials, roles });
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
    setIsAuth(false);
    clearUser();
    setToken('');
  };

  return { authWithEmaiAndPassword, logOut, isLoading, isError };
}
