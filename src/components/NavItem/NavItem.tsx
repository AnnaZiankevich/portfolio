import styles from "./nav-item.module.scss";

type PropsType = {
    title: string,
    onClick?: () => void
  }

const NavItem = (props: PropsType) => {
  return (
    <div className={styles.content} onClick={props.onClick}>
        {props.title}
    </div>
  );
}

export default NavItem;