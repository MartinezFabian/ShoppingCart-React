import { createContext, useReducer } from 'react';
import { CART_ACTION_TYPES, cartReducer } from './cartReducer';

export const CartContext = createContext();

const cartInitialState = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (newProduct) => {
    return dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: newProduct,
    });
  };

  const decreaseQuantity = (product) => {
    return dispatch({
      type: CART_ACTION_TYPES.DECREASE_QUANTITY,
      payload: product,
    });
  };

  const removeFromCart = (idToRemoved) => {
    return dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: idToRemoved,
    });
  };

  const clearCart = () => {
    return dispatch({
      type: CART_ACTION_TYPES.CLEAR_CART,
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
