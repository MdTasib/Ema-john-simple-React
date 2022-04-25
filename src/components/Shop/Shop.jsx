import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
		(async () => {
			const res = await fetch(`http://localhost:5000/product?page=${page}&size=${size}`);
			const data = await res.json();
			setProducts(data);
		})();
	}, [page, size]);

  useEffect(() => {
    fetch('http://localhost:5000/productCount')
    .then(res => res.json())
    .then(data => {
      const count = data.count;
      const pages = Math.ceil(count/10);
      setPageCount(pages);
    })
  }, [])

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product._id === selectedProduct._id);
    if(!exists){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }else {
      const rest = cart.filter(product => product._id !== selectedProduct._id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  }

  return (
    <div className='grid grid-cols__4-1'>
      <div className="">
        <div className='product-container grid grid-cols__3 gap-3'>
          {
            products.map(product => (
              <Product 
                key={product._id}
                product={product} 
                handleAddToCart={handleAddToCart}
              />
            ))
          }
        </div>
        <div className="pagination">
            {
              [...Array(pageCount).keys()].map((number, index) =>
              <button
                className={page===number ? 'selected' : ''} 
                onClick={() => setPage(number)}
                key={index}>{number}</button>
              )
            }
            <select defaultValue={10} onChange={e => setSize(e.target.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
        </div>
      </div>
      <div className='shopping-cart'>
        <Cart cart={cart}>
          <Link to='/orders'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;