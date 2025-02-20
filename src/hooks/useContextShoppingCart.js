import { ShoppingCartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import { useContext } from "react";

export const useContextShoppingCart = () => useContext(ShoppingCartContext);
