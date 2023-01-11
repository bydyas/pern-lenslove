import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const createStore = (fn, name) => {
  if (import.meta.env.MODE === 'development') {
    return create(devtools(fn, { name }));
  }

  return create(fn);
};
