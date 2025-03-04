import { useEffect, useMemo } from "react";
import { useGet } from "../../hooks/useGet";
import { URL_SERVER } from "../../utils/constants";
import { ArtisanShopContext } from "./ArtisanShopContext";
import PropTypes from "prop-types";

export const ArtisanShopProvider = ({ children }) => {
  const {
    responseGet: responseArtisanShops,
    loadingGet: loadingArtisanShops,
    errorGet: errorArtisanShops,
    getData: getArtisanShops,
  } = useGet({
    loading: true,
  });

  const handleGetArtisanShops = async () => {
    try {
      const data = await getArtisanShops({ url: `${URL_SERVER}/artisanShops` });

      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const providerValue = useMemo(
    () => ({
      responseArtisanShops,
      loadingArtisanShops,
      errorArtisanShops,
      handleGetArtisanShops,
    }),
    [responseArtisanShops, loadingArtisanShops, errorArtisanShops]
  );

  useEffect(() => {
    handleGetArtisanShops();
  }, []);

  return (
    <ArtisanShopContext.Provider value={providerValue}>
      {children}
    </ArtisanShopContext.Provider>
  );
};

ArtisanShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
