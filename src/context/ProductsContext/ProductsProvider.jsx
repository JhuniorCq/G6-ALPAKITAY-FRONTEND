import { useEffect, useMemo } from "react";
import { ProductsContext } from "./ProductsContex";
import { URL_BACKEND, URL_SERVER } from "../../utils/constants";
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

  const providerValue = useMemo(
    () => ({
      responseProducts,
      loadingProducts,
      errorProducts,
    }),
    [responseProducts, loadingProducts, errorProducts]
  );

  useEffect(() => {
    getProducts({ url: `${URL_BACKEND}/api/products/all` });
  }, []);

  return (
    <ProductsContext.Provider value={providerValue}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
