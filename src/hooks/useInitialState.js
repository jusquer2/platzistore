import { useState } from "react";

const initialState = {
  cart: [],
  menuToggle: false,
  orderToggle: false,
  mobileToggle: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (indexValue) => {
    setState({
      ...state,
      cart: [...state.cart.filter((_, index) => index !== indexValue)],
    });
  };
  const toggleOrders = () => {
    setState({
      ...state,
      menuToggle: false,
      orderToggle: !state.orderToggle,
      mobileToggle: false,
    });
  };
  const toggleMenu = () => {
    setState({
      ...state,
      menuToggle: !state.menuToggle,
      orderToggle: false,
      mobileToggle: false,
    });
  };
  const toggleMobileMenu = () => {
    setState({
      ...state,
      menuToggle: false,
      orderToggle: false,
      mobileToggle: !state.mobileToggle,
    });
  };
  return {
    state,
    addToCart,
    removeFromCart,
    toggleOrders,
    toggleMenu,
    toggleMobileMenu,
  };
};

export default useInitialState;
