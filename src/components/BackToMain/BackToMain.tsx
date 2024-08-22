import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./BackToMain.module.scss";
import back from '../../assets/return.svg'

const BackToMain = () => {
    return (
        <Link href={'/'} className={styles.back}>
            <Image 
                src={back}
                alt='back'
            />
            <span>Вернуться на главную</span>
        </Link>
    )
}

export default BackToMain;