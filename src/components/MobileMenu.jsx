import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import flechita from '@icons/flechita.svg';
import styles from '@styles/MobileMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const MobileMenu = () => {
    const { toggleMobileMenu } = useContext(AppContext);
    return (
        <div className={styles.MobileMenu}>
            <Image src={flechita} alt="arrow" onClick={()=> toggleMobileMenu()} onKeyDown={()=> toggleMobileMenu()} />
            <ul>
                <li>
                <Link href="/">CATEGORIES</Link>
                </li>
                <li>
                <Link href="/">All</Link>
                </li>
                <li>
                <Link href="/">Clothes</Link>
                </li>
                <li>
                <Link href="/">Electronics</Link>
                </li>
                <li>
                <Link href="/">Furnitures</Link>
                </li>
                <li>
                <Link href="/">Toys</Link>
                </li>
                <li>
                <Link href="/">Other</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link href="/">My orders</Link>
                </li>
                <li>
                <Link href="/">My account</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link href="/" className="email">platzi@example.com</Link>
                </li>
                <li>
                <Link href="/" className="sign-out">Sign out</Link>
                </li>
            </ul>
        </div>

    );
};

export default MobileMenu;