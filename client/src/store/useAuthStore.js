import { createStore } from '../helpers/createStore';

const useAuthStore = createStore(
  (set) => ({
    isAuth: false,
    setIsAuth: (option) => set({ isAuth: option }),
  }),
  'AUTH',
);

export default useAuthStore;
