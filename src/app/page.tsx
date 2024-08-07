"use client";

import { useState, useEffect } from 'react';
import styles from "./page.module.scss"
import StartBlock from '../components/StartBlock/StartBlock';
import TechnologiesBlock from '../components/TechnologiesBlock/TechnologiesBlock';
import ExperienceBlock from '../components/ExperienceBlock/ExperienceBlock';
import EducationBlock from '../components/EducationBlock/EducationBlock';
import PortfolioBlock from '../components/PortfolioBlock/PortfolioBlock';
import ContactBlock from '../components/ContactBlock/ContactBlock';

export default function Home() { 

  if (typeof window === 'undefined') {
    console.log("window.innerHeight");
  }

  const useDeviceSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    useEffect(() => {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return [width, height]
  }

  return (
    <div className={styles.main}>
      <StartBlock />
      <TechnologiesBlock />
      <ExperienceBlock />
      <EducationBlock />
      <PortfolioBlock />
      <ContactBlock />
    </div>
  );
}
