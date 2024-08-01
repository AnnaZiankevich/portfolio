import React, { FC, ComponentType, useState } from 'react';
import styles from "./LearnMore.module.scss"
import chevron from '../../assets/chevron-down.svg'

interface LearnMoreProps {
  isOpen: boolean;
}

const LearnMore: FC<LearnMoreProps> = ({ isOpen }) => {

  console.log(isOpen);
  

    return (
      <div className={styles.content}>
        <div style={{ cursor: 'pointer' }} className={styles.button}>
            <img src={chevron.src} alt="chevron" style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }} />
            Узнать больше о проекте 
        </div>
      </div>
    );
};

export default LearnMore;