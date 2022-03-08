import React from 'react';
import ProductInfo from '@components/ProductInfo';
import styles from '@styles/ProductDetail.module.scss';
import closeItem from '@icons/icon_close.png';
import Image from 'next/image';
const ProductDetail = ({product, setToggleProduct }) => {
	return (
		<aside className={styles["ProductDetail"]}>
			<div className={styles["ProductDetail-close"]} onClick={()=>{setToggleProduct(false)}} >
				<Image src={closeItem} alt="close"  />
			</div>
			<ProductInfo product={product}  />
		</aside>
	);
}

export default ProductDetail;
