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

export default function Home() {
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
            <div className={styles.technologies_block__item}>
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
    </main>
  );
}
