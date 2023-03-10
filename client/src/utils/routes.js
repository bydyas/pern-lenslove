import {
  ADMIN_ROUTE,
  CART_ROUTE,
  HELP_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './consts';
import { Admin, Auth, Cart, Home, Shop, Help } from '../pages';

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
  },
  {
    path: SHOP_ROUTE,
    Element: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Element: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: Auth,
  },
  {
    path: HELP_ROUTE,
    Element: Help,
  },
];
