export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  DECREASE_QUANTITY: 'DECREASE_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
};

const updateLocalStorage = (newState) => {
  localStorage.setItem('cart', JSON.stringify(newState));
};

export const cartReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productExist = state.some((product) => product.id === action.payload.id);

      if (productExist) {
        const newState = state.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }

          return product;
        });

        updateLocalStorage(newState);

        return newState;
      } else {
        const newState = [...state, { ...action.payload, quantity: 1 }];

        updateLocalStorage(newState);

        return newState;
      }
    }

    case CART_ACTION_TYPES.DECREASE_QUANTITY: {
      if (action.payload.quantity > 1) {
        const newState = state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        });
        updateLocalStorage(newState);

        return newState;
      } else {
        const newState = state.filter((item) => item.id !== action.payload.id);

        updateLocalStorage(newState);

        return newState;
      }
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const newState = state.filter((product) => product.id !== action.payload);

      updateLocalStorage(newState);

      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      const newState = [];

      updateLocalStorage(newState);

      return newState;
    }

    default: {
      return state;
    }
  }
};
