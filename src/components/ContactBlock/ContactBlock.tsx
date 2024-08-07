import styles from "./contact-block.module.scss";
import telegram from '../../assets/telegram.svg'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import contactImage from '../../assets/phone book.svg'

const ContactBlock = () => {
  return (
    <div className={styles.contact_block}>
    <img className={styles.contact_block__image} 
         src={contactImage.src}
         alt="contactImage"
    />
    <div className={styles.contact_block__content}>
      <div className={styles.contact_block__title}>Контакты</div>
      <div className={styles.contact_block__info}>
        <div className={styles.contact_block__text}>
          Вы можете связаться со мной поcредством:
        </div>
        <div className={styles.contact_block__contacts}>
          <div className={styles.contact_block__item}>
            <img className={styles.item__icon}
                 src={telegram.src}
                 alt="telegram"
            />
            <div className={styles.item__info}>
              Telegram:&nbsp; 
              <a href="https://t.me/moonvi_tg" target="_blank">
                @moonvi_tg
              </a>
            </div>
          </div>

          <div className={styles.contact_block__item}>
            <img className={styles.item__icon}
                 src={gmail.src}
                 alt="gmail"
            />
            <div className={styles.item__info}>
              E-mail:&nbsp; 
              <a href="mailto:anna.ziankevich@gmail.com" target="_blank">
                anna.ziankevich@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.contact_block__item}>
            <img className={styles.item__icon}
                 src={linkedin.src}
                 alt="linkedin"
            />
            <div className={styles.item__info}>
              LinkedIn:&nbsp; 
              <a href="https://www.linkedin.com/in/anna-ziankevich" target="_blank">
                Anna Ziankevich
              </a>
            </div>
          </div>

          <div className={styles.contact_block__item}>
            <img className={styles.item__icon}
                 src={github.src}
                 alt="github"
            />
            <div className={styles.item__info}>
              GitHub:&nbsp; 
              <a href="https://github.com/AnnaZiankevich" target="_blank">
                AnnaZiankevich
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ContactBlock;