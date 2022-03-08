import { useContext } from "react";
import AppContext from "../context/AppContext";

const useGetSumProducts = () => {
  const { state } = useContext(AppContext);
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;
  const sum = state?.cart.reduce(reducer, 0);

  return sum;
};

export default useGetSumProducts;
