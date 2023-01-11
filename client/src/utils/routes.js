import { ADMIN_ROUTE, CART_ROUTE, HOME_ROUTE, SHOP_ROUTE } from './consts';
import { Admin, Cart, Home, Shop } from '../pages';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: Admin,
    role: 'ADMIN',
  },
  {
    path: CART_ROUTE,
    Element: Cart,
    role: 'USER',
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Element: Home,
    role: 'USER',
  },
  {
    path: SHOP_ROUTE,
    Element: Shop,
    role: 'USER',
  },
];
