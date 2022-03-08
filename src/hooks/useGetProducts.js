import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      const respuesta = response.data.filter((item) => {
        return (
          item?.images[0].includes("http://") ||
          item?.images[0].includes("https://")
        );
      });
      setProducts(respuesta);
      setIsLoading(true);
    }
    fetchData();
  }, [API]);
  return { products, isLoading };
};
export default useGetProducts;
