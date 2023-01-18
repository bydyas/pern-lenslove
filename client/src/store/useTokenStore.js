import { createStore } from '../helpers/createStore';
import { persist, createJSONStorage } from 'zustand/middleware';

const useTokenStore = createStore(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
    }),
    {
      name: 'token-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
  'TOKEN',
);

export default useTokenStore;
