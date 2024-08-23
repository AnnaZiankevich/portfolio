import React from 'react';
import Image from 'next/image';
import styles from "./page.module.scss"
import transithub1 from '../../../assets/transithub/transithub1.jpg'
import BackToMain from '../../../components/BackToMain/BackToMain';

const TransitHub = () => {
    return (
      <div className={styles.content}>
      <BackToMain />
        <div className={styles.info}>
          <h1>TransitHub</h1>
          <p>
            TransitHub — это сайт логистической компании, для которой был разработан современный и 
            функциональный дизайн. Основная цель сайта — предоставить пользователям удобный доступ 
            к информации о логистических услугах компании, о самой компании и ее вакансиях. Дизайн 
            сайта ориентирован на улучшение пользовательского опыта, с интуитивной навигацией и 
            адаптивным интерфейсом для различных устройств.
          </p>
          <Image 
            src={transithub1}
            alt='transithub1'
          />
          <div className={styles.dev_tab}>
            <iframe src="https://annaziankevich.github.io/TransitHub/" 
                    className={styles.desktop}
            >
              Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
            <iframe src="https://annaziankevich.github.io/TransitHub/"
                    className={styles.mobile} 
            >
              Ваш браузер не поддерживает плавающие фреймы!
            </iframe>
            <span></span>
          </div>
        </div>
      <BackToMain />
    </div>
    );
};

export default TransitHub;