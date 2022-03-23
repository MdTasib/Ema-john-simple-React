import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

  let total = 0;
  let shipping = 0;
  for(const product of cart){
    total += product.price;
    shipping += product.shipping;
  }

  const tax = Number((total * 0.1)); // total * 10 / 100
  const grandTotal = total + shipping + tax;

  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;