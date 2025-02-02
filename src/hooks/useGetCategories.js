import axios from "axios";
import { useState } from "react";

export const useGetCategories = () => {
  const [stateCategories, setStateCategories] = useState({
    responseCategories: null,
    loadingCategories: true,
    errorCategories: null,
  });

  const getCategories = async ({ url }) => {
    try {
      const { data } = await axios.get(url);

      setStateCategories({
        responseCategories: data,
        loadingCategories: false,
        errorCategories: null,
      });

      return data;
    } catch (error) {
      const errorMessage = error.response?.data.message ?? error.message;
      console.error("Error en useGetCategories.js :", errorMessage);

      setStateCategories({
        responseCategories: null,
        loadingCategories: false,
        errorCategories: errorMessage,
      });
    }
  };

  return {
    ...stateCategories,
    getCategories,
  };
};
