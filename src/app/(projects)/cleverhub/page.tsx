import React from 'react';
import Image from 'next/image';
import styles from "./page.module.scss"
import cleverhub1 from '../../../assets/cleverhub/cleverhub1.png'
import cleverhub2 from '../../../assets/cleverhub/cleverhub2.png'
import cleverhub3 from '../../../assets/cleverhub/cleverhub3.png'
import cleverhub4 from '../../../assets/cleverhub/cleverhub4.png'
import BackToMain from '../../../components/BackToMain/BackToMain';

const CleverHub = () => {
    return (
      <div className={styles.content}>
        <BackToMain />
          <div className={styles.info}>
            <h1>Clever Hub</h1>
            <p>
              Clever Hub - это инновационное решение, созданное для улучшения мотивации сотрудников 
              и повышения уровня доверия клиентов. Оно помогает компаниям поддерживать свою репутацию 
              и достигать успеха в современном бизнесе.
            </p>
            <p>
              Основная функция - создание и назначение учебных курсов для каждого сотрудника. 
              Приложение позволяет контролировать процесс обучения и проверять компетентность своих 
              подчиненных на основе результатов тестов. Благодаря этому, сотрудники могут сохранять и 
              улучшать свои навыки, что положительно сказывается на эффективности работы всей команды.
            </p>
            <p>
              Clever Hub - это надежный инструмент для компаний, стремящихся улучшить свою работу и 
              достичь высоких результатов в бизнесе.
            </p>
            <p>
              Вход в приложение:
            </p>
            <Image 
              src={cleverhub1}
              alt='cleverhub1'
            />
            <p>
              Профиль администратора:
            </p>
            <Image 
              src={cleverhub2}
              alt='cleverhub2'
            />
            <p>
              Профиль пользователя:
            </p>
            <Image 
              src={cleverhub4}
              alt='cleverhub4'
            />
            <p>
              Курсы:
            </p>
            <Image 
              src={cleverhub3}
              alt='cleverhub3'
            />
          </div>
        <BackToMain />
      </div>
    );
};

export default CleverHub;