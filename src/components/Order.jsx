import React, {useContext} from 'react';
import '@styles/Order.scss';
import flechita from '@icons/flechita.svg';
import AppContext from '../context/AppContext';
import useGetSumProducts from '../hooks/useGetSumProducts';
import Image from 'next/image';
const Order = () => {
	const { state:{cart}}=useContext(AppContext);
	return (
		<div className="Order">
			<p>
				<span>{(new Date).toISOString()}</span>
				<span>{cart.length}  article{`${cart.length>1 || cart.length===0?'s':''}`}</span>
			</p>
			<p>${useGetSumProducts()}</p>
			<Image src={flechita} alt="arrow" />
		</div>
	);
};

export default Order;
