import { ProductsContext } from "../context/ProductsContext/ProductsContex";
import { useContext } from "react";

export const useProducts = () => useContext(ProductsContext);
