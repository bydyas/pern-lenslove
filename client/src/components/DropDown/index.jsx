import React, { useState } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';

import useUserStore from '../../store/useUserStore';
import { useAuth } from '../../hooks/useAuth';

import styles from './styles.module.css';

function DropDown() {
  const email = useUserStore((state) => state.user.email);
  const [isOpen, setIsOpen] = useState(false);
  const { logOut } = useAuth();

  const triggerDropdown = () => setIsOpen(!isOpen);

  return (
    <div onClick={triggerDropdown} className={styles.dropdown}>
      <p>{email || 'Account'}</p>
      <ul className={`${styles.dropdownContent} ${isOpen ? 'block' : null}`}>
        <li>
          <button onClick={logOut} className={`btn ${styles.btn}`} type="button">
            <IoLogOutOutline style={{ fontSize: 20 }} />
            <div className={styles.grow}>
              <span>Log out</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
