import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product)
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
        shopping cart
      </div>
    </div>
  );
};

export default Shop;