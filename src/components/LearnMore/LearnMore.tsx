import React, { FC, ComponentType, useState } from 'react';
import styles from "./LearnMore.module.scss"
import chevron from '../../assets/chevron-down.svg'

interface LearnMoreProps {
  isOpen: boolean;
  toggle: () => void;
}

const LearnMore: FC<LearnMoreProps> = ({ isOpen, toggle }) => {
    return (
      <div className={styles.content} onClick={toggle}>
        <div style={{ cursor: 'pointer' }} className={styles.button}>
            <img src={chevron.src} alt="chevron" style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }} />
            Узнать больше о проекте 
        </div>
      </div>
    );
};

export default LearnMore;