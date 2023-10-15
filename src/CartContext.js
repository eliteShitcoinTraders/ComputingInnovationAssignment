import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(() => {
      const storedCartCount = sessionStorage.getItem('cartCount');
      return storedCartCount ? parseInt(storedCartCount, 10) : 0;
    });

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const decrementCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
      sessionStorage.setItem('cartCount', cartCount - 1);
    }
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, decrementCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
