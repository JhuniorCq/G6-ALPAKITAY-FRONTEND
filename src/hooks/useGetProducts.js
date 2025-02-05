import axios from "axios";
import { useState } from "react";

export const useGetProducts = () => {
  const [stateProducts, setStateProducts] = useState({
    responseProducts: null,
    loadingProducts: true,
    errorProducts: null,
  });

  const getProducts = async ({ url, queryParameter }) => {
    try {
      const { data } = await axios.get(
        queryParameter ? `${url}?category=${queryParameter}` : url
      );

      setStateProducts({
        responseProducts: data,
        loadingProducts: false,
        errorProducts: null,
      });

      return data;
    } catch (error) {
      const errorMessage = error.response?.data.message ?? error.message;
      console.error("Error en useGetProducts.js :", errorMessage);

      setStateProducts({
        responseProducts: null,
        loadingProducts: false,
        errorProducts: errorMessage,
      });
    }
  };

  return {
    ...stateProducts,
    getProducts,
  };
};
