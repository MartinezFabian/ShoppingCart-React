import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
  const { cartContents, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  return {
    cartContents,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
