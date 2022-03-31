import React from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "../Shop/Shop.css";

const Orders = () => {
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);

	return (
		<div className='grid grid-cols__4-1'>
			<div className='grid gap-3 mr-auto py-3'>
				{cart.map(product => (
					<ReviewItem key={product.id} product={product} />
				))}
			</div>
			<div className='shopping-cart'>
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default Orders;
