import styles from "./start-block.module.scss";
import startImage from '../../assets/main-img.svg'
import telegram1 from '../../assets/telegram1.svg'
import gmail1 from '../../assets/gmail1.svg'
import linkedin1 from '../../assets/linkedin1.svg'
import github1 from '../../assets/github1.svg'

const StartBlock = () => {
  return (
    <div className={styles.start_block}>
    <div className={styles.start_block__main_info}>
      <div className={styles.start_block__header}>
        Привет! Я <span>Зенькевич Анна, Frontend разработчик</span>
      </div>
      <div className={styles.start_block__text}>
        Я - Frontend-разработчик с опытом более 2 лет в создании международных проектов на основе React.js, 
        Next.js, TypeScript, JavaScript, Redux и Redux Toolkit. Эффективно сотрудничаю с коллегами по всему 
        миру в командах из 8-20 специалистов. Владею принципами ООП, SOLID, MVP и KISS для надёжной 
        разработки приложений и объяснения их функциональности. Уверенно пользуюсь графическими 
        редакторами (Figma, Photoshop, Adobe Illustrator). Мои знания и навыки могут быть эффективно 
        применены в вашей компании, способствуя достижению высоких результатов и успешной реализации 
        проектов
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
  );
}

export default StartBlock;