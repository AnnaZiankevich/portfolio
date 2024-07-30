import React, { FC, ComponentType, useState } from 'react';
import styles from "./LearnMore.module.scss"
import chevron from '../../assets/chevron-down.svg'

interface LearnMoreProps {
  MoreInfo: ComponentType<any>; 
}

const LearnMore: FC<LearnMoreProps> = ({ MoreInfo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMoreInfo = () => {
        setIsOpen(!isOpen);
    };

    return (
      <div className={styles.content}>
        <div style={{ cursor: 'pointer' }} onClick={toggleMoreInfo} className={styles.button}>
            <img src={chevron.src} alt="chevron" style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }} />
            Узнать больше о проекте 
        </div>
        {isOpen && <MoreInfo />}
      </div>
    );
};

export default LearnMore;