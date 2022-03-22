import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className='grid grid-cols__4-1'>
      <div className='product-container grid grid-cols__3 gap-3'>
        {
          products.map(product => (
            <Product 
              key={product.id}
              product={product} 
              handleAddToCart={handleAddToCart}
            />
          ))
        }
      </div>
      <div className='shopping-cart'>
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;