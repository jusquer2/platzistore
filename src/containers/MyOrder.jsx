import React, {useContext} from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import flechita from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import useGetSumProducts from '../hooks/useGetSumProducts';
import styles from '@styles/MyOrder.module.scss';
import Image from 'next/image';
const MyOrder = () => {
	const { state, toggleOrders}=useContext(AppContext);
	return (
		<aside className={styles.MyOrder}>
			<div className={styles["title-container"]}>
				<Image src={flechita} alt="arrow" onClick={()=> toggleOrders()} />
				<p className={styles["title"]}>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				{state?.cart.map((item, index) =>(
					<OrderItem product={item} indexValue={index} key={`order-item-${index}`} />
				))}
				

			</div>
			<div className={styles[`footer`]}>				
				<div className={styles[`order`]}>
					<p>
						<span>Total</span>
					</p>
					<p>${useGetSumProducts()}</p>
				</div>
				<Link className={styles[`primary-button`]} href="/checkout">
					Checkout
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
