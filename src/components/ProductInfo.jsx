import React, { useContext } from 'react';
import styles from '@styles/ProductInfo.module.scss';
import shoppingCart from '../assets/icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import Image from 'next/image';
const ProductInfo = ({product}) => {
	const { addToCart } = useContext(AppContext);
	const handleClick = item =>{
		addToCart(item);
	};
	return (
		<>
		{product?.images[0]&& product?.images[0].includes('http://') && <Image src={product?.images[0]} alt={product?.title} width={240} height={240} />}
		<div className={styles["ProductInfo"]}>
		<p>${product.price}</p>
				<p>{product.title}</p>
			<div className={styles['pcontainer']}>
				
				<p>{product.description}</p>
			</div>
			<button className={styles["PrimaryButton"],styles["add-to-cart-button"]}>
			<Image src={shoppingCart} alt="add to cart" onClick={()=>{handleClick(product);}} />
			Add to cart
			</button>
		</div>
		</>

	);
};

export default ProductInfo;
