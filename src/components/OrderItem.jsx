import React from 'react';

import closeItem from '@icons/icon_close.png';
import AppContext from '../context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';
const OrderItem = ({product,indexValue}) => {
		const { removeFromCart } = React.useContext(AppContext);
	
		const handleRemove = (index) => {
			removeFromCart(index);
		};
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product.name} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<Image src={closeItem} alt="close" onClick={()=>handleRemove(indexValue)}  />
		</div>
	);
};

export default OrderItem;
