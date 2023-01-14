import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline, IoSearchOutline } from 'react-icons/io5';
import { SHOP_ROUTE } from '../../utils/consts';

import styles from './styles.module.css';

function NavBar() {
  const routesList = [
    {
      path: SHOP_ROUTE,
      title: 'Shops',
    },
    {
      path: '/offers',
      title: 'Offers',
    },
    {
      path: '/warranty',
      title: 'Warranty',
    },
    {
      path: '/medical',
      title: 'Medical',
    },
    {
      path: '/info',
      title: 'Info',
    },
    {
      path: '/blog',
      title: 'Blog',
    },
    {
      path: '/about-us',
      title: 'About us',
    },
    {
      path: '/contact',
      title: 'Contact',
    },
  ];

  const servicesList = [
    {
      path: '/',
      icon: <IoSearchOutline size={20} />,
    },
    {
      path: '/',
      icon: <IoHeartOutline size={20} />,
    },
    {
      path: '/',
      icon: <IoCartOutline size={20} />,
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className="flexContainer">
          <ul className={styles.menu}>
            {routesList.map(({ path, title }, i) => (
              <li key={i} className={styles.link}>
                <NavLink
                  to={path}
                  style={({ isActive }) =>
                    isActive ? { color: 'var(--primary)', fontWeight: 800 } : undefined
                  }>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={`stickyRight ${styles.menu}`}>
            {servicesList.map((service, i) => (
              <a key={i} href={service.path} style={{ display: 'flex', alignItems: 'center' }}>
                {service.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
