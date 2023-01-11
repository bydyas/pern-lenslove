import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import useUserStore from '../store/useUserStore';
import { login, registration } from '../helpers/http';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { parseRoles } from '../helpers/db';

export function useAuth() {
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setUser = useUserStore((state) => state.setUser);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const authWithEmaiAndPassword = async (type, credentials, roles) => {
    setIsLoading(true);
    try {
      switch (type) {
        case 'SIGN_IN': {
          const response = await login(credentials);
          const userData = {
            ...response,
            roles: parseRoles(response.roles),
          };
          setUser(userData);
          setIsAuth(true);
          navigate(SHOP_ROUTE);
          break;
        }
        case 'SIGN_UP': {
          const response = await registration({ ...credentials, roles });
          console.log('NEW USER: ', {
            ...response,
            roles: parseRoles(response.roles),
          });
          break;
        }
        default:
          throw new Error('Invalid auth type');
      }
    } catch (error) {
      const { message } = error.response.data;
      setIsError(message);
    }
    setIsLoading(false);
  };

  return { authWithEmaiAndPassword, isLoading, isError };
}
