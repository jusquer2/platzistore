import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import Menu from '@components/Menu';
import '@styles/Checkout.scss';
import AppContext from '../context/AppContext';
import useGetSumProducts from '../hooks/useGetSumProducts';

const Checkout = () => {
	const { state:{cart}}=useContext(AppContext);
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>{(new Date).toISOString()}</span>
							<span>{cart.length}  article{`${cart.length>1 || cart.length===0?'s':''}`}</span>
						</p>
						<p>${useGetSumProducts()}</p>
					</div>
				</div>
				{cart.map((item,index)=>(
					<OrderItem product={item} indexValue={index} key={`checkout-order-item-${index}`} />
					))}
			</div>
		</div>
	);
}

export default Checkout;
