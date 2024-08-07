import styles from "./education-block.module.scss";
import Button from "../../components/Button/Button"
import bsuir from'../../assets/bsuir.svg'
import mgtk from '../../assets/mgtk.svg'
import itilogia from '../../assets/itilogia.svg'

const EducationBlock = () => {
  return (
    <div className={styles.education_block}>
    <div className={styles.education_block__title}>Образование</div>
    <div className={styles.education_block__content}>
      <div className={styles.education_block__info}>
        <div className={styles.education_block__item}>
          <a className={styles.item__place} href="https://www.bsuir.by/" target="_blank">
            <img className={styles.item__place_icon} 
                 src={bsuir.src}
            />
            <div className={styles.item__place_name}>
              Белорусский государственный<br/>
              университет информатики и радиоэлектроники
            </div>
          </a>
          <div className={styles.item__info}>
            <div className={styles.item__education}>
              Программное обеспечение информационных технологий
            </div>
            <div className={styles.item__ed_data}>
              2022 - 2026
            </div>
          </div>
        </div>

        <div className={styles.education_block__item}>
          <a className={styles.item__place} href="http://mstc.bntu.by/ru/" target="_blank">
            <img className={styles.item__place_icon} 
                 src={mgtk.src}
            />
            <div className={styles.item__place_name}>
              Минский государственный технологический колледж
            </div>
          </a>
          <div className={styles.item__info}>
            <div className={styles.item__education}>
              Программное обеспечение информационных технологий, 
              компьютерная графика
            </div>
            <div className={styles.item__ed_data}>
              2018 - 2022
            </div>
          </div>
        </div>

        <div className={styles.education_block__item}>
          <a className={styles.item__place} href="https://itlogia.ru/" target="_blank">
            <img className={styles.item__place_icon} 
                 src={itilogia.src}
            />
            <div className={styles.item__place_name}>
              АЙТИЛОГИЯ
            </div>
          </a>
          <div className={styles.item__info}>
            <div className={styles.item__education}>
              ИНТЕНСИВ UX/UI Start
            </div>
            <div className={styles.item__ed_data}>
              <a href="https://itlogia.ru//upload/images/intensive-participant-certificate/1696931000Jn7Jc.jpeg" target="_blank">
                <Button title="Смотреть сертификат" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.education_block__languages}>
        <div className={styles.education_block__language}>
          Английский - C1
        </div>
        <div className={styles.education_block__language}>
          Белорусский, русский - родные
        </div>
      </div>
    </div>
  </div>
  );
}

export default EducationBlock;