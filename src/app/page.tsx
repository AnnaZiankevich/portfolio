import styles from "./page.module.scss";
import startImage from '../assets/main-img.svg'
import telegram1 from '../assets/telegram1.svg'
import gmail1 from '../assets/gmail1.svg'
import linkedin1 from '../assets/linkedin1.svg'
import github1 from '../assets/github1.svg'
import react from '../assets/react.svg'
import nextjs from '../assets/nextjs.svg'
import javascript from '../assets/javascript.svg'
import typescript from '../assets/typescript.svg'
import redux from '../assets/redux.svg'
import wordpress from '../assets/wordpress.svg'
import sass from '../assets/sass.svg'
import git from'../assets/git.svg'
import aspnet from '../assets/aspnet.svg'
import figma from '../assets/figma.svg'
import { ExperienceCalculator } from "../helpers/helpers"
import fintech from '../assets/fintech.png'
import pnpl from '../assets/pineapple practice.png'
import dr from '../assets/dom rebenka.png'

export default function Home() {
  const periods = [
    { start: '2022-06', end: '2024-01' },
    { start: '2023-08', end: '2024-03' },
    { start: '2024-02', end: 'сейчас' },
  ];

  const technologies = [
    {
      image: react.src,
      title: 'React'
    },
    {
      image: nextjs.src,
      title: 'Next.js'
    },
    {
      image: javascript.src,
      title: 'JavaScript'
    },
    {
      image: typescript.src,
      title: 'TypeScript'
    },
    {
      image: redux.src,
      title: 'Redux'
    },
    {
      image: wordpress.src,
      title: 'Wordpress'
    },
    {
      image: sass.src,
      title: 'Sass/SCSS'
    },
    {
      image: git.src,
      title: 'Git'
    },
    {
      image: aspnet.src,
      title: 'ASP.NET'
    },
    {
      image: figma.src,
      title: 'Figma'
    },
  ]

  return (
    <main className={styles.main}>
      <div className={styles.start_block}>
        <div className={styles.start_block__main_info}>
          <div className={styles.start_block__header}>
            Привет! Я <span>Зенькевич Анна, Frontend разработчик</span>
          </div>
          <div className={styles.start_block__text}>
            Я - опытный разработчик с богатым опытом в создании сайтов и веб-приложений. 
            Мой творческий подход к проектам позволяет разрабатывать уникальные и эффективные 
            решения, создавая продукты, которые приносят реальную ценность<br/><br/>
            Кроме того, у меня отличные навыки коммуникации, что помогает эффективно 
            взаимодействовать с дизайнерами, бэкенд-разработчиками и другими членами команды. 
            Я постоянно стремлюсь к профессиональному росту и развитию, следуя последним 
            тенденциям в веб-разработке
          </div>
          <div className={styles.start_block__icons}>
            <img src={telegram1.src} alt="telegram1" />
            <img src={gmail1.src} alt="gmail1" />
            <img src={linkedin1.src} alt="linkedin1" />
            <img src={github1.src} alt="github1" />
          </div>
        </div>
        <div className={styles.start_block__image}>
          <img src={startImage.src} alt="" />
        </div>
      </div>
      <div className={styles.technologies_block}>
        <div className={styles.technologies_block__title}>Технологии</div>
        <div className={styles.technologies_block__content}>
          {technologies.map(item => (
            <div className={styles.technologies_block__item} key={item.title}>
              <img src={item.image} 
                   alt={item.title}
              />
              <div className={styles.technologies_block__item_title}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
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
                <a href="https://minefintech.com/ru.html">
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
                <a href="https://pnpl.site/">
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
              Ссылка на итоговый проект: <a href="https://front.education.pnpl.tech/">
                https://front.education.pnpl.tech/
              </a>
            </div>
          </div>

          <div className={styles.experience_block__item}>
            <div className={styles.experience_block__item_header}>
              <div className={styles.experience_block__item_company}>
                <a href="http://domrebenkaminsk.by/">
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
              Ссылка на итоговый проект: <a href="http://domrebenkaminsk.by/">
                http://domrebenkaminsk.by/
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
