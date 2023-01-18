import React from 'react';
import BannerImg from '../../assets/hero.jpg';

import styles from './styles.module.css';

function Hero() {
  return (
    <section>
      <div className={styles.container}>
        <img src={BannerImg} alt="Banner" />
      </div>
    </section>
  );
}

export default Hero;
