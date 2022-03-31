import { useEffect, useState } from "react";

const useProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch("products.json");
			const data = await res.json();
			setProducts(data);
		})();
	}, []);

	return [products, setProducts];
};

export default useProducts;
