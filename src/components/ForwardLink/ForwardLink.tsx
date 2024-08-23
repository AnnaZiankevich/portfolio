import React from 'react';
import Image from 'next/image';
import styles from "./ForwardLink.module.scss";
import Link from 'next/link';
import linkImg from '../../assets/link1.svg';

interface ForwardLinkProps {
    link: string;
  }

const ForwardLink: React.FC<ForwardLinkProps> = ({ link }) => {
    return (
        <div className={styles.link}>
          <Image src={linkImg} alt="link" className={styles.icon} />
          <b><Link href={link} target="_blank">
            Ссылка на проект
          </Link></b>
        </div>
    );
}; 

export default ForwardLink;