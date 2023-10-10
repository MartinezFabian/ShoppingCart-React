import { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';

export const CartContext = createContext();

const initialState = [];

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (newProduct) => {
    return dispatch({
      type: 'ADD_TO_CART',
      payload: newProduct,
    });
  };

  const decreaseQuantity = (product) => {
    return dispatch({
      type: 'DECREASE_QUANTITY',
      payload: product,
    });
  };

  const removeFromCart = (idToRemoved) => {
    return dispatch({
      type: 'REMOVE_FROM_CART',
      payload: idToRemoved,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: 'CLEAR_CART',
    });
  };

  return (
    <CartContext.Provider
      value={{ cartContents: state, addToCart, removeFromCart, decreaseQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
