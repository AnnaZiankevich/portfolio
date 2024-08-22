import Image from 'next/image';
import Link from 'next/link';
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
      href: '/cleverhub',
    },
    {
      id: 'moodhub',
      link: '',
      image: moodhub,
      href: '/moodhub',
    },
    {
      id: 'smarter',
      link: '',
      image: smarter,
      href: '/smarter',
    },
    {
      id: 'transithub',
      link: '',
      image: transithub,
      href: '/transithub',
    },
    {
      id: 'domrebenka',
      link: '',
      image: domrebenka,
      href: '/domrebenka',
    },
  ]

  return (
    <div className={styles.portfolio_block}>
      <div className={styles.portfolio_block__title}>Мои проекты</div>
      <div className={styles.items}>
        {projects.map(item => (
            <Link 
              className={styles.item} 
              key={item.id}
              href={item.href}
            >
              <div className={styles.link}>
                <Image
                  src={link}
                  alt='link'
                />
              </div>
              <Image 
                   src={item.image} 
                   alt={item.id} 
                   className={styles.item__cover}
              />
            </Link>
        ))}
      </div>
    </div>
  );
}

export default PortfolioBlock;