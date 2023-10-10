import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
  const { cartContents, addToCart, removeFromCart, decreaseQuantity, clearCart } =
    useContext(CartContext);

  return {
    cartContents,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
  };
};
