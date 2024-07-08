import styles from "./button.module.scss";
import download from '../../assets/download.svg';

type PropsType = {
    title: string,
    download?: boolean | false,
    onClick?: () => void
  }

const Button = (props: PropsType) => {
  return (
    <button className={styles.body} onClick={props.onClick}>
      { props.download && <img src={download.src} alt="" />}
      <div className={styles.title}>{props.title}</div>
    </button>
  );
}

export default Button;