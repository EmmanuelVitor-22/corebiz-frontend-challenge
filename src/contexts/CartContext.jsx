import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const addCart = (itemProduct) => {
        const updatedCart = [...cart];
        
        const hasItemProduct = updatedCart.find((item) => item.productId === itemProduct.productId);

        hasItemProduct 
            ? hasItemProduct.quantity += 1 
            : updatedCart.push({ ...itemProduct, quantity: 1 });

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
