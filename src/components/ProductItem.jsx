import React, { useContext,useState } from 'react';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import ProductDetail from '../containers/ProductDetail';
import Image from 'next/image';


const ProductItem = ({product}) => {
	const [ toggleProduct, setToggleProduct ] = useState(false);
	const { state,addToCart } = useContext(AppContext);
	
	const handleClick = item =>{
		addToCart(item);
	};
	return (
		<>
		<div className={styles["ProductItem"]}>
			{product.images[0] && <Image   loading="lazy" src={product?.images[0]} width={240} height={240} alt={product.title} onClick={() => setToggleProduct(!toggleProduct)} />}
			<div className={styles["product-info"]}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure >
					{state.cart.includes(product) ?<Image onClick={() => handleClick(product)} onKeyDown={() => handleClick(product)}
						className={styles.disabled, styles['add-to-cart-btn']}
						src={addedToCartImage}
						alt="added to cart"
					/>:<Image src={shoppingCart} alt="" />}
					
				</figure>
			</div>
		</div>
		{toggleProduct && <ProductDetail
				product={product}
				setToggleProduct={setToggleProduct}
			/>}
		</>
	);
};

export default ProductItem;
