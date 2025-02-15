import axios from "axios";
import { useState } from "react";

export const useGet = ({ loading }) => {
  const [stateGet, setStateGet] = useState({
    responseGet: null,
    loadingGet: loading,
    errorGet: null,
  });

  const getData = async ({ url }) => {
    setStateGet((prev) => ({ ...prev, loading: true }));

    try {
      const { data } = await axios.get(url);
      setStateGet({
        responseGet: data,
        loadingGet: false,
        errorGet: null,
      });

      return data;
    } catch (error) {
      const errorMessage = error.response?.data.message ?? error.message;
      console.error("Error en useGet: ", errorMessage);
      setStateGet({
        responseGet: null,
        loadingGet: false,
        errorGet: errorMessage,
      });
    }
  };

  return {
    ...stateGet,
    getData,
  };
};
