import React, { useContext } from 'react';
import Image from 'next/image';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from 'assets/icons/icon_shopping_cart.svg';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@components/MobileMenu';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const {state, toggleOrders, toggleMenu, toggleMobileMenu} = useContext(AppContext);
	return (
		
		<nav className={styles.Nav}>
			<Image src={menu.src} alt="menu" height={40} width={40} className={styles["menu"]} onClick={()=>toggleMobileMenu()} />
			<div className={styles["navbar-left"]}>
				<Image src={logo} alt="logo" className={styles["nav-logo"]} />
				<ul>
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
						<Link href="/">Others</Link>
					</li>
				</ul>
			</div>
			<div className={styles["navbar-right"]}>
				<ul>
					<li className={styles["navbar-email"]} >
						<button className={styles["header_nav_button"], styles["navbar-email"]} onClick={()=>toggleMenu()} onKeyDown={()=>toggleMenu()}>platzi@example.com</button>
					</li>
					<li className={styles["navbar-shopping-cart"]}>
						<Image src={shoppingCart} alt="shopping cart" onClick={() =>toggleOrders()} onKeyDown={()=>toggleOrders()} />
						{state?.cart.length>0?<div>{state?.cart.length>9?"+9":state?.cart.length}</div>:null}
					</li>
				</ul>
			</div>
			{state?.mobileToggle && <MobileMenu />}
			{state?.menuToggle && <Menu />}
			{state?.orderToggle && <MyOrder />}
		</nav>
	);
};

export default Header;
