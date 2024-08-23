import React from 'react';
import Image from 'next/image';
import styles from "./page.module.scss"
import smarter1 from '../../../assets/smarter/smarter1.jpg'
import BackToMain from '../../../components/BackToMain/BackToMain';

const Smarter = () => {
    return (
      <div className={styles.content}>
      <BackToMain />
        <div className={styles.info}>
          <h1>Smarter</h1>
          <p>
          Smarter
          </p>
          <Image 
            src={smarter1}
            alt='smarter1'
            style={{maxWidth: '700px'}}
          />
        </div>
      <BackToMain />
    </div>
    );
};

export default Smarter;