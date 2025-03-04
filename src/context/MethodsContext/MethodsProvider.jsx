import PropTypes from "prop-types";
import { MethodsContext } from "./MethodsContext";
import { useGet } from "../../hooks/useGet";
import { useEffect, useMemo } from "react";
import { URL_SERVER } from "../../utils/constants";

export const MethodsProvider = ({ children }) => {
  const {
    responseGet: responseMethods,
    loadingGet: loadingMethods,
    errorGet: errorMethods,
    getData: getMethods,
  } = useGet({ loading: true });

  const providerValue = useMemo(
    () => ({
      responseMethods,
      loadingMethods,
      errorMethods,
      getMethods,
    }),
    [responseMethods, loadingMethods, errorMethods]
  );

  useEffect(() => {
    getMethods({ url: `${URL_SERVER}/shippingAndPaymentOptions` });
  }, []);

  return (
    <MethodsContext.Provider value={providerValue}>
      {children}
    </MethodsContext.Provider>
  );
};

MethodsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
