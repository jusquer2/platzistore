import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Orders.scss';
import AppContext from '../context/AppContext';

const Orders = () => {
	const { state:{cart}}=useContext(AppContext);
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					{cart.map((item,index)=>(
					<OrderItem product={item} indexValue={index} key={`order-item-${index}`} />
					))
			}
				</div>
			</div>
		</div>
	);
}

export default Orders;
