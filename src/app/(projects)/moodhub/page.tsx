import React from 'react';
import Image from 'next/image';
import ForwardLink from '../../../components/ForwardLink/ForwardLink';
import styles from "./page.module.scss"
import moodhub2 from '../../../assets/moodhub/moodhub2.png'
import BackToMain from '../../../components/BackToMain/BackToMain';

const MoodHub = () => {
  return (
    <div className={styles.content}>
      <BackToMain />
        <div className={styles.info}>
          <h1>MoodHub</h1>
          <p>
            Дневник эмоций — это веб-приложение, созданное для отслеживания и анализа эмоционального состояния пользователя. 
            Оно позволяет записывать ежедневные эмоции, добавлять заметки и пометки о событиях, которые их вызвали. 
            С помощью визуализации данных и аналитических инструментов пользователи могут лучше понимать свои 
            эмоциональные паттерны и работать над улучшением эмоционального благополучия.
          </p>
          <p>
            <b>Стек: React, JavaScript, SCSS, LocalStorage</b>
          </p>
          <ForwardLink link={"https://annaziankevich.github.io/moodhub/"} />
          <p>
            В рамках работы над проектом был создан UI Kit и дизайн приложения
          </p>
          <Image 
            src={moodhub2}
            alt='moodhub2'
          />
          <p>
            Спроектировано разделение эмоций на категории: Хорошие, Средние, Плохие, Супер плохие. Для интуитивно 
            понятного интерфейса каждой категории присвоен свой цвет
          </p>
          <p>
            Реализованы CRUD операции над записями в дневнике. Хранение организовано в LocalStorage
          </p>
          <video preload="auto" aria-label="Video player" autoPlay loop muted>
            <source src='/moodhub.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <BackToMain />
    </div>
  );
};

export default MoodHub;