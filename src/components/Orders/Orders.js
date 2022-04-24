import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Shop/Shop.css";

const Orders = () => {
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);

	const handleRemoveProduct = product => {
		const rest = cart.filter(pd => pd._id !== product._id);
		setCart(rest);
		removeFromDb(product._id);
	};

	return (
		<div className='grid grid-cols__4-1'>
			<div className='grid gap-3 mr-auto py-3'>
				{cart.map(product => (
					<ReviewItem
						key={product._id}
						product={product}
						handleRemoveProduct={handleRemoveProduct}
					/>
				))}
			</div>
			<div className='shopping-cart'>
				<Cart cart={cart}>
					<Link to='/shipment'>
						<button>Procced Shipping</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Orders;
