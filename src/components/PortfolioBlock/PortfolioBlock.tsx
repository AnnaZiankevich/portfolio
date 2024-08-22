import Image from 'next/image';
import styles from "./portfolio-block.module.scss";
import cleverhub from '../../assets/cleverhub.png';
import moodhub from '../../assets/moodhub.png'
import smarter from '../../assets/smarter.png'
import transithub from '../../assets/transithub.png'
import domrebenka from '../../assets/domrebenka.png'
import link from '../../assets/link.svg'

const PortfolioBlock = () => {

  const projects = [
    {
      id: 'cleverhub',
      link: '',
      image: cleverhub,
    },
    {
      id: 'moodhub',
      link: '',
      image: moodhub,
    },
    {
      id: 'smarter',
      link: '',
      image: smarter,
    },
    {
      id: 'transithub',
      link: '',
      image: transithub,
    },
    {
      id: 'domrebenka',
      link: '',
      image: domrebenka,
    },
  ]

  return (
    <div className={styles.portfolio_block}>
      <div className={styles.portfolio_block__title}>Мои проекты</div>

      <div className={styles.items}>
        {projects.map(item => (
            <div className={styles.item} key={item.id}>
              <div className={styles.link}>
                
              </div>
              <Image 
                   src={item.image} 
                   alt={item.id} 
                   className={styles.item__cover}
                   layout="responsive" 
              />
            </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioBlock;