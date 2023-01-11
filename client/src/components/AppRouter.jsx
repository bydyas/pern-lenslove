import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../utils/routes';
import useUserStore from '../store/useUserStore';
import useAuthStore from '../store/useAuthStore';

function AppRouter() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const { roles } = useUserStore((state) => state.user);

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Element, role }, i) => {
          if (roles.includes(role)) {
            return <Route key={i} path={path} element={<Element />} />;
          }
        })}
      {publicRoutes.map(({ path, Element }, i) => (
        <Route key={i} path={path} element={<Element />} />
      ))}
      <Route path={'*'} element={<div>Error Page</div>} />
    </Routes>
  );
}

export default AppRouter;
