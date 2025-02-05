import { useGet } from "../../hooks/useGet";
import { URL_SERVER } from "../../utils/constants";
import { ArtisanContext } from "./ArtisanContext";

export const ArtisanProvider = ({ children }) => {
  const {
    responseGet: responseArtisan,
    loadingGet: loadingArtisan,
    errorGet: errorArtisan,
    getData: getArtisan,
  } = useGet({
    loading: true,
  });

  // handleGetArtisan
  const handleGetArtisan = async () => {
    try {
      const data = await getArtisan({ url: `${URL_SERVER}/artisan` });

      return data;
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <ArtisanContext.Provider
      value={{
        responseArtisan,
        loadingArtisan,
        errorArtisan,
        handleGetArtisan,
      }}
    >
      {children}
    </ArtisanContext.Provider>
  );
};
