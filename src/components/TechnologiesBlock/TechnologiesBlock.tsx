import styles from "./technologies-block.module.scss";
import react from '../../assets/react.svg'
import nextjs from '../../assets/nextjs.svg'
import javascript from '../../assets/javascript.svg'
import typescript from '../../assets/typescript.svg'
import redux from '../../assets/redux.svg'
import wordpress from '../../assets/wordpress.svg'
import sass from '../../assets/sass.svg'
import git from '../../assets/git.svg'
import aspnet from '../../assets/aspnet.svg'
import figma from '../../assets/figma.svg'

const TechnologiesBlock = () => {

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
  );
}

export default TechnologiesBlock;