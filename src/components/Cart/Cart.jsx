import React from 'react';

const Cart = ({cart}) => {
  console.log(cart)
  return (
    <div>
      <h3>Order Summary</h3>
        {
          cart.length
        }
    </div>
  );
};

export default Cart;