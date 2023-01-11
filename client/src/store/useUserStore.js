import { createStore } from '../helpers/createStore';

const initialUser = {
  name: '',
  email: '',
  roles: ['USER'],
  iat: '',
  exp: '',
};

const useUserStore = createStore(
  (set) => ({
    user: initialUser,
    setUser: (data) => set({ user: data }),
    clearUser: () => set({ user: initialUser }),
  }),
  'USER',
);

export default useUserStore;
