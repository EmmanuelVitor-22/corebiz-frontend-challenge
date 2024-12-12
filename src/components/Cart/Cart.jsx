import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../../contexts/CartContext';
import iconCart from '../../assets/icons/shopping-cart.svg';
import './cart.scss';

const Cart = () => {
  const { totalItems } = useCart();
  const badgeRef = useRef(null);

  const handleClick = () => {
    if (badgeRef.current) {
      badgeRef.current.classList.add('cart-icon__badge-animate');
      setTimeout(() => {
        badgeRef.current.classList.remove('cart-icon__badge-animate');
      }, 300);
    }
  };

  return (
    <div className="cart-icon" onClick={handleClick}>
      <img src={iconCart} alt="icone de carrinho" className="cart-icon__icon" />
      {totalItems > 0 && (
        <div 
          ref={badgeRef} 
          className={`cart-icon__badge cart-icon__badge--${totalItems}`}
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default Cart;