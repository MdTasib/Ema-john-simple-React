import React from "react";
import useProducts from "../../Hooks/useProducts";

const Orders = () => {
	const [products, setProducts] = useProducts();

	return (
		<div>
			<h3>This is orders page</h3>
			<h5>{products.length}</h5>
		</div>
	);
};

export default Orders;
