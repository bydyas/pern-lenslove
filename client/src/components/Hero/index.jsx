import React from 'react';
import BannerImg from '../../assets/hero.jpg';

import styles from './styles.module.css';

function Hero() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.title}>Spring Sale</p>
          <p className={styles.description}>Up to -40%</p>
          <a className={`btn ${styles.button}`} href="/">
            <span>See offer</span>
          </a>
        </div>
        <img className={styles.banner} src={BannerImg} alt="Banner" />
      </div>
    </section>
  );
}

export default Hero;
