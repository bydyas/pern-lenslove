import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoFacebook } from 'react-icons/io5';

import { HOME_ROUTE } from '../../utils/consts';

import styles from './styles.module.css';

const social = [
  {
    icon: <IoLogoInstagram style={{ fontSize: 17 }} />,
    path: '/',
  },
  {
    icon: <IoLogoTwitter style={{ fontSize: 17 }} />,
    path: '/',
  },
  {
    icon: <IoLogoYoutube style={{ fontSize: 17 }} />,
    path: '/',
  },
  {
    icon: <IoLogoFacebook style={{ fontSize: 17 }} />,
    path: '/',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link to={HOME_ROUTE} className={styles.logo}>
              <strong>LENS</strong>
              <span>LOVE</span>
            </Link>
            <ul className={styles.links}>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <ul className={styles.social}>
              {social.map(({ icon, path }, i) => (
                <li key={i}>
                  <a href={path} className={styles.block}>
                    <div className={styles.iconHolder}>{icon}</div>
                  </a>
                </li>
              ))}
            </ul>
            <p>©LensLove 2022. We love glasses!</p>
          </div>
          <div className={styles.col}>2</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
