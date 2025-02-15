import { useEffect, useState } from "react";
import { useContextArtisanShop } from "../../hooks/useContextArtisanShop";
import { ALL_OPTION } from "../../utils/constants";
import Select from "react-select";

export const FilterByArtisanShop = ({ setSelectedFilter }) => {
  const { responseArtisanShops, loadingArtisanShops, errorArtisanShops } =
    useContextArtisanShop();

  const [artisanShopOptions, setArtisanShopOptions] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedFilter((prev) => ({ ...prev, artisanShop: selectedOption }));
  };

  useEffect(() => {
    if (responseArtisanShops) {
      const artisanShopOptions = [
        { value: 0, label: ALL_OPTION },
        ...responseArtisanShops.map((artisanShop) => ({
          value: artisanShop.id,
          label: artisanShop.name,
        })),
      ];

      setArtisanShopOptions(artisanShopOptions);
    }
  }, []);

  return (
    <div>
      <p>Tiendas: </p>
      {loadingArtisanShops ? (
        <p>Cargando ...</p>
      ) : errorArtisanShops ? (
        <p>{errorArtisanShops}</p>
      ) : (
        responseArtisanShops && (
          <Select
            options={artisanShopOptions}
            defaultValue={artisanShopOptions[0]}
            onChange={handleSelectChange}
          />
        )
      )}
    </div>
  );
};
