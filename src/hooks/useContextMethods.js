import { useContext } from "react";
import { MethodsContext } from "../context/MethodsContext/MethodsContext";

export const useContextMethods = () => useContext(MethodsContext);
