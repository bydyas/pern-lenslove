import { createStore } from '../helpers/createStore';

const useAuthStore = createStore(
  (set) => ({
    isAuth: false,
    token: null,
    setIsAuth: (option) => set({ isAuth: option }),
    setToken: (token) => set({ token }),
  }),
  'AUTH',
);

export default useAuthStore;
