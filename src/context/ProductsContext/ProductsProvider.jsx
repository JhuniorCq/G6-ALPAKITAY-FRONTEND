import { useState } from "react";
import { ProductsContext } from "./ProductsContex";
import { useGetProducts } from "../../hooks/useGetProducts";
import { URL_SERVER } from "../../utils/constants";
import { useGet } from "../../hooks/useGet";

export const ProductsProvider = ({ children }) => {
  // const [products, setProducts] = useState(null);
  // const { responseProducts, loadingProducts, errorProducts, getProducts } =
  //   useGetProducts();
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
    // const data = await getProducts({
    //   url: `${URL_SERVER}/products`,
    //   queryParameter: queryParameter,
    // });

    const url = queryParameter
      ? `${URL_SERVER}/products?category=${queryParameter}`
      : `${URL_SERVER}/products`;

    const data = await getProducts({
      url,
    });

    return data;
  };

  return (
    <ProductsContext.Provider
      value={{
        // products,
        responseProducts,
        loadingProducts,
        errorProducts,
        handleGetProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
