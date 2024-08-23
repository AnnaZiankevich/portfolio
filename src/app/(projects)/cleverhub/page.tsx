import React from 'react';
import Image from 'next/image';
import styles from "./page.module.scss"
import cleverhub from '../../../assets/cleverhub.png'
import cleverhub1 from '../../../assets/cleverhub/cleverhub1.png'
import cleverhub2 from '../../../assets/cleverhub/cleverhub2.png'
import cleverhub3 from '../../../assets/cleverhub/cleverhub3.png'
import cleverhub4 from '../../../assets/cleverhub/cleverhub4.png'
import cleverhub5 from '../../../assets/cleverhub/cleverhub5.jpg'
import cleverhub6 from '../../../assets/cleverhub/cleverhub6.jpg'
import cleverhub7 from '../../../assets/cleverhub/cleverhub7.jpg'
import BackToMain from '../../../components/BackToMain/BackToMain'
import ForwardLink from '../../../components/ForwardLink/ForwardLink';

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
              <b>
                Стек: React, JavaScript, Redux, SCSS, Material UI, Vite, Axios, Chart.js, GitLab, Jira
              </b>
            </p>
            <ForwardLink link={'https://front.education.pnpl.tech/'} />
            <Image
              src={cleverhub}
              alt='cleverhub'
              style={{maxWidth: '700px'}}
            />
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
            <p>
              Создание курса:
            </p>
            <Image 
              src={cleverhub5}
              alt='cleverhub6'
            />
            <p>
              Уроки курса:
            </p>
            <Image 
              src={cleverhub6}
              alt='cleverhub6'
            />
                        <p>
              Курсы у пользователя:
            </p>
            <Image 
              src={cleverhub7}
              alt='cleverhub7'
            />
          </div>
        <BackToMain />
      </div>
    );
};

export default CleverHub;