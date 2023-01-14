import React, { useState } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';

import useUserStore from '../../store/useUserStore';
import { useAuth } from '../../hooks/useAuth';

import styles from './styles.module.css';

const content = [
  {
    title: 'Manage',
    icon: <IoLogOutOutline style={{ fontSize: 20 }} />,
  },
  {
    title: 'Log out',
    icon: <IoLogOutOutline style={{ fontSize: 20 }} />,
  },
];

function DropDown() {
  const email = useUserStore((state) => state.user.email);
  const [isOpen, setIsOpen] = useState(false);

  const triggerDropdown = () => setIsOpen(!isOpen);

  return (
    <div onClick={triggerDropdown} className={styles.dropdown}>
      <p>{email || 'Account'}</p>
      <ul className={`${styles.dropdownContent} ${isOpen ? 'block' : null}`}>
        {content.map(({ icon, title }) => (
          <Item icon={icon} title={title} />
        ))}
      </ul>
    </div>
  );
}

function Item({ icon, title }) {
  const { logOut } = useAuth();
  return (
    <li>
      <button onClick={logOut} className={`btn ${styles.btn}`} type="button">
        {icon}
        <div className={styles.center}>
          <span>{title}</span>
        </div>
      </button>
    </li>
  );
}

export default DropDown;
