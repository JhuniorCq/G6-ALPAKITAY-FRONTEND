import { useEffect, useMemo } from "react";
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

  // Memoriza el objeto para evitar recreaciones innecesarias
  const providerValue = useMemo(
    () => ({
      responseProducts,
      loadingProducts,
      errorProducts,
    }),
    [responseProducts, loadingProducts, errorProducts]
  );

  console.log(responseProducts);

  useEffect(() => {
    getProducts({ url: `${URL_SERVER}/products` });
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
