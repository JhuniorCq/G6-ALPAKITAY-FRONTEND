import { useMemo } from "react";
import { ProductsContext } from "./ProductsContex";
import { URL_SERVER } from "../../utils/constants";
import { useGet } from "../../hooks/useGet";
import PropTypes from "prop-types";

export const ProductsProvider = ({ children }) => {
  const {
    responseGet: responseProducts,
    loadingGet: loadingProducts,
    errorGet: errorProducts,
    getData: getProducts,
  } = useGet({
    loading: true,
  });

  // Devuelve productos en base a la categoría
  const handleGetProducts = async ({ queryParameter }) => {
    const url = queryParameter
      ? `${URL_SERVER}/products?category=${queryParameter}`
      : `${URL_SERVER}/products`;

    const data = await getProducts({
      url,
    });

    return data;
  };

  // Memoriza el objeto para evitar recreaciones innecesarias
  const providerValue = useMemo(
    () => ({
      responseProducts,
      loadingProducts,
      errorProducts,
      handleGetProducts,
    }),
    [responseProducts, loadingProducts, errorProducts]
  );

  return (
    <ProductsContext.Provider value={providerValue}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
