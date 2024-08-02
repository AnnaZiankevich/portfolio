import styles from "./404.module.scss";
import cat from '../assets/cat.gif';
import Button from "../components/Button/Button";

export default function Page404() {
  return (
    <div className={styles.content}>

      <div className={styles.cat}>
        <img src={cat.src} alt="" />
      </div>

      <div className={styles.main}>
        <div className={styles.main__title}>Страница не найдена!</div>
        <a href="/">
          <Button title="На главную" />
        </a>
      </div>
    </div>
  );
}