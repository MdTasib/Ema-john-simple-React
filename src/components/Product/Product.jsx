import React from 'react';
import './Product.css';
import cart from '../../images/cart.png';

const Product = ({product, handleAddToCart}) => {
  const {name, img, price, seller, ratings} = product;

  return (
    <div className='card'>
      <img src={img} alt="" />
      <div className="card-info">
        <h4>{name}</h4>
        <h5>Price : {price}</h5>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className='cart-btn'>Add To Cart <img src={cart} alt="" /></button>
    </div>
  );
};

export default Product;