import styles from "./footer.module.scss";
import Button from "../Button/Button";
import resume from '../../assets/Resume_Ziankevich.pdf';
import { currentYear } from "../../helpers/helpers";

const Footer = () => {
  return (
    <header className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.info}>
                @ 2022 - {currentYear} Personal
            </div>
            <a className={styles.download} 
               href={resume} 
               target="_blank" 
               rel="noopener noreferrer" 
               download='Resume_Ziankevich.pdf'
            >
              <Button title="Резюме" download />
            </a>
        </div>
    </header>
  );
}

export default Footer;