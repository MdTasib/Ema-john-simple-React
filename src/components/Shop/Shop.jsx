import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, [])
  
  return (
    <div className='grid grid-cols__4-1'>
      <div className='products'>
        products
      </div>
      <div className='shopping-cart'>
        shopping cart
      </div>
    </div>
  );
};

export default Shop;