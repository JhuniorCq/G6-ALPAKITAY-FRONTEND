import { useState } from "react";
import { ProductsContext } from "./ProductsContex";
import { useGetProducts } from "../../hooks/useGetProducts";
import { URL_SERVER } from "../../utils/constants";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const { responseProducts, loadingProducts, errorProducts, getProducts } =
    useGetProducts();

  const handleGetProducts = async ({ queryParameter }) => {
    const data = await getProducts({
      url: `${URL_SERVER}/products`,
      queryParameter: queryParameter,
    });

    if (data) {
      setProducts(data);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadingProducts,
        errorProducts,
        handleGetProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
