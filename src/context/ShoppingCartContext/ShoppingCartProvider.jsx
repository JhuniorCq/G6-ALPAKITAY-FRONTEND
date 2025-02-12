import { useReducer } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import {
  CART_KEY_SESSION_STORAGE,
  SHOPPING_CART_ACTIONS,
} from "../../utils/constants";

export const ShoppingCartProvider = ({ children }) => {
  const shoppingCartReducer = (state, action) => {
    let updatedStatus;

    switch (action.type) {
      case SHOPPING_CART_ACTIONS.ADD_PRODUCT: {
        const cartProduct = action.payload;

        if (state.some((product) => product.id === cartProduct.id)) {
          return state;
        }

        updatedStatus = [...state, cartProduct];
        break;
      }
      case SHOPPING_CART_ACTIONS.REMOVE_PRODUCT: {
        const productId = action.payload;

        updatedStatus = state.filter((product) => product.id !== productId);
        break;
      }
      case SHOPPING_CART_ACTIONS.INCREASE_PRODUCT: {
        const productId = action.payload;

        updatedStatus = state.map((product) => {
          if (product.id === productId) {
            product.quantity++;
          }

          return product;
        });

        break;
      }
      case SHOPPING_CART_ACTIONS.DECREASE_PRODUCT: {
        const productId = action.payload;

        updatedStatus = state.map((product) => {
          if (product.id === productId && product.quantity > 1) {
            product.quantity--;
          }

          return product;
        });
        break;
      }
      case SHOPPING_CART_ACTIONS.REMOVE_ALL_PRODUCTS: {
        updatedStatus = [];
        break;
      }
      default: {
        return state;
      }
    }

    window.sessionStorage.setItem(
      CART_KEY_SESSION_STORAGE,
      JSON.stringify(updatedStatus)
    );

    return updatedStatus;
  };

  const getCartSessionStorage = (initialShoppingCart) => {
    const cartSaved = window.sessionStorage.getItem(CART_KEY_SESSION_STORAGE);
    return cartSaved ? JSON.parse(cartSaved) : initialShoppingCart;
  };

  const [shoppingCart, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    [],
    getCartSessionStorage
  );

  const addProductCart = (product) => {
    product.quantity = 1;

    const action = {
      type: SHOPPING_CART_ACTIONS.ADD_PRODUCT,
      payload: product,
    };

    shoppingCartDispatch(action);
  };

  const removeProductCart = (id) => {
    const action = {
      type: SHOPPING_CART_ACTIONS.REMOVE_PRODUCT,
      payload: id,
    };

    shoppingCartDispatch(action);
  };

  const increaseProductCart = (id) => {
    const action = {
      type: SHOPPING_CART_ACTIONS.INCREASE_PRODUCT,
      payload: id,
    };

    shoppingCartDispatch(action);
  };

  const decreaseProductCart = (id) => {
    const action = {
      type: SHOPPING_CART_ACTIONS.DECREASE_PRODUCT,
      payload: id,
    };

    shoppingCartDispatch(action);
  };

  const removeAllProductsCart = () => {
    const action = {
      type: SHOPPING_CART_ACTIONS.REMOVE_ALL_PRODUCTS,
    };

    shoppingCartDispatch(action);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addProductCart,
        removeProductCart,
        increaseProductCart,
        decreaseProductCart,
        removeAllProductsCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
