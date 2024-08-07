import styles from "./experience-block.module.scss";
import { ExperienceCalculator } from "../../helpers/helpers"
import fintech from '../../assets/fintech.png'
import pnpl from '../../assets/pineapple practice.png'
import dr from '../../assets/dom rebenka.png'

const ExperienceBlock = () => {

  const periods = [
    { start: '2022-06', end: '2024-01' },
    { start: '2023-08', end: '2024-03' },
    { start: '2024-02', end: 'сейчас' },
  ]; 

  return (
    <div className={styles.experience_block}>
    <div className={styles.experience_block__title}>
      <div className={styles.experience_block__title_main}>
        Мой опыт работы
      </div>
      <ExperienceCalculator periods={periods} />
    </div>
    <div className={styles.experience_block__content}>
      <div className={styles.experience_block__item}>
        <div className={styles.experience_block__item_header}>
          <div className={styles.experience_block__item_company}>
            <a href="https://minefintech.com/ru.html" target="_blank">
              <img className={styles.company__icon} 
                   src={fintech.src}
              />
            </a>
            <div className={styles.company__info}>
              <div className={styles.company__post}>Frontend developer</div>
              <div className={styles.company__name}>Fintech Capital and Custody LLC</div>
            </div>
          </div>
          <div className={styles.experience_block__period}>
            февраль 2024 - сейчас
          </div>
        </div>
        <div className={styles.experience_block__item_content}>
          Я занимаюсь разработкой и поддержкой веб-приложений для банков. Разрабатываю архитектуру 
          приложений и бизнес-процессы, создаю многостраничные сайты и поддерживаю сайты на WordPress.  
          В своей работе использую технологии React (Redux toolkit, Formik, React Router DOM, Axios, 
          AntDesign), TypeScript, GitLab, Tailwind CSS, SCSS и WordPress.
        </div>
      </div>

      <div className={styles.experience_block__item}>
        <div className={styles.experience_block__item_header}>
          <div className={styles.experience_block__item_company}>
            <a href="https://pnpl.site/" target="_blank">
              <img className={styles.company__icon} 
                   src={pnpl.src}
              />
            </a>
            <div className={styles.company__info}>
              <div className={styles.company__post}>Frontend developer</div>
              <div className={styles.company__name}>Pineapple Practice</div>
            </div>
          </div>
          <div className={styles.experience_block__period}>
            август 2023 - март 2024
          </div>
        </div>
        <div className={styles.experience_block__item_content}>
          В рамках проектной занятости велась работа с технологиями HTML, SCSS, React 
          (Redux, React Hook Form, React Router DOM, Axios, Chart.js), GitLab и PostgreSQL.
          <br/><br/>
          Участие в создании и конкретизации технического задания, планирование задач по 
          спринтам, а также разработка базы данных проекта. Разработка компонентов и кастомных 
          элементов интерфейса, создание панели администратора, панели пользователя, различные 
          дашборды, проектирование и создание бизнес-логики курсов, уроков и тестов. Для 
          взаимодействия с backend использовала Swagger и Axios.
          <br/><br/>
          Ссылка на итоговый проект: <a href="https://front.education.pnpl.tech/" target="_blank">
            https://front.education.pnpl.tech/
          </a>
        </div>
      </div>

      <div className={styles.experience_block__item}>
        <div className={styles.experience_block__item_header}>
          <div className={styles.experience_block__item_company}>
            <a href="http://domrebenkaminsk.by/" target="_blank">
              <img className={styles.company__icon} 
                   src={dr.src}
              />
            </a>
            <div className={styles.company__info}>
              <div className={styles.company__post}>Web developer</div>
              <div className={styles.company__name}>Дом ребенка № 1</div>
            </div>
          </div>
          <div className={styles.experience_block__period}>
            июнь 2022 - январь 2024
          </div>
        </div>
        <div className={styles.experience_block__item_content}>
          Создание варфреймов и дизайна в Figma, а также разработка и обновление контента. Разработка 
          сайта с использованием HTML, CSS, PHP, JavaScript и CMS WordPress, включая натяжку верстки. 
          После завершения разработки проводилось тестирование и запуск проекта. Кроме того, 
          обеспечивалась поддержка и регулярное обновление сайта.
          <br/><br/>
          Ссылка на итоговый проект: <a href="http://domrebenkaminsk.by/" target="_blank">
            http://domrebenkaminsk.by/
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ExperienceBlock;