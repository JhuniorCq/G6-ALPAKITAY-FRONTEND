import { useEffect } from "react";
import { useGet } from "../../hooks/useGet";
import { URL_SERVER } from "../../utils/constants";
import { ArtisanShopContext } from "./ArtisanShopContext";

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
      console.log("ArtisanShopProvider: ", data);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    handleGetArtisanShops();
  }, []);

  return (
    <ArtisanShopContext.Provider
      value={{
        responseArtisanShops,
        loadingArtisanShops,
        errorArtisanShops,
        handleGetArtisanShops,
      }}
    >
      {children}
    </ArtisanShopContext.Provider>
  );
};
