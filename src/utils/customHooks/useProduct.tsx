import axios from "axios";
import { useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = async (url: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setProductData(data.products);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  return { isLoading, productData, getProducts };
};

export default useProduct;
