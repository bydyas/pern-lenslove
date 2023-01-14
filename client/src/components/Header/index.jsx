import React from 'react';
import { Link } from 'react-router-dom';

import useAuthStore from '../../store/useAuthStore';
import { HOME_ROUTE, LOGIN_ROUTE } from '../../utils/consts';
import DropDown from '../DropDown';

import styles from './styles.module.css';

function Header() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const telNumber = '+47 333 78 901';

  return (
    <header>
      <div className={`container ${styles.container}`}>
        <div className="flexContainer">
          <Link to={HOME_ROUTE} className={styles.logo}>
            <strong>LENS</strong>
            <span>LOVE</span>
          </Link>
          <div className="stickyRight">
            <nav className={styles.menu}>
              <a href={'tel:' + telNumber}>{telNumber}</a>
              <a href="/">Help</a>
              {isAuth ? <DropDown /> : <Link to={LOGIN_ROUTE}>Account</Link>}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
