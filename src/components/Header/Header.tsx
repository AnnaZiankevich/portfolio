import styles from "./header.module.scss";
import NavItem from "../NavItem/NavItem";
import Button from "../Button/Button";
import resume from '../../assets/Resume_Ziankevich.pdf';

const Header = () => {

  const navItems = ['Технологии', 'Опыт работы', 'Образование', 'Мои проекты', 'Контакты']

  return (
    <header className={styles.header}>
        <div className={styles.content}>
            <div className={styles.nav}>
                {navItems.map(item => {
                    return <NavItem title={item} />
                })}
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

export default Header;