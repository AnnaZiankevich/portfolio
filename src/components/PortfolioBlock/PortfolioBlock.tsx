import styles from "./portfolio-block.module.scss";
import cleverhub from '../../assets/cleverhub.png';
import moodhub from '../../assets/moodhub.png'
import smarter from '../../assets/smarter.png'
import transithub from '../../assets/transithub.png'
import domrebenka from '../../assets/domrebenka.png'

const PortfolioBlock = () => {
  return (
    <div className={styles.portfolio_block}>
    <div className={styles.portfolio_block__title}>Мои проекты</div>

    <div className={styles.item}>
      <div className={styles.item__body}>
        <img src={cleverhub.src} alt="cleverhub" className={styles.item__cover} />
      </div>
    </div>

    <div className={styles.item}>
      <div className={styles.item__body}>
        <img src={moodhub.src} alt="moodhub" className={styles.item__cover} />
      </div>
    </div>

    <div className={styles.item}>
      <div className={styles.item__body}>
        <img src={smarter.src} alt="smarter" className={styles.item__cover} />
      </div>
    </div>

    <div className={styles.item}>
      <div className={styles.item__body}>
        <img src={transithub.src} alt="transithub" className={styles.item__cover} />
      </div>
    </div>

    <div className={styles.item} key="domrebenka">
      <div className={styles.item__body}>
        <img src={domrebenka.src} alt="domrebenka" className={styles.item__cover} />
      </div>
    </div>
  </div>
  );
}

export default PortfolioBlock;