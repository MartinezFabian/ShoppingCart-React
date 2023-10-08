import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartContents, setCartContents] = useState([]);

  const addToCart = (newProduct) => {
    const productExist = cartContents.some((product) => product.id === newProduct.id);

    if (productExist) {
      const newState = cartContents.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });

      setCartContents(newState);
    } else {
      setCartContents((prevState) => [...prevState, { ...newProduct, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCartContents([]);
  };

  return (
    <CartContext.Provider value={{ cartContents, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
