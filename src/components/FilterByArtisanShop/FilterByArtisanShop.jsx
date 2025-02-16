import { useEffect, useState } from "react";
import { useContextArtisanShop } from "../../hooks/useContextArtisanShop";
import { ALL_OPTION } from "../../utils/constants";
import PropTypes from "prop-types";
import Select from "react-select";
import "./FilterByArtisanShop.css";

export const FilterByArtisanShop = ({ setSelectedFilters, customStyles }) => {
  const { responseArtisanShops, loadingArtisanShops, errorArtisanShops } =
    useContextArtisanShop();

  const [artisanShopOptions, setArtisanShopOptions] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedFilters((prev) => ({ ...prev, artisanShop: selectedOption }));
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
  }, [responseArtisanShops]);

  return (
    <div className="filter-by-artisan-shop">
      <p className="filter-by-artisan-shop__name">Tiendas: </p>
      {loadingArtisanShops && <p>Cargando ...</p>}

      {!loadingArtisanShops && errorArtisanShops && <p>{errorArtisanShops}</p>}

      {!loadingArtisanShops &&
        !errorArtisanShops &&
        responseArtisanShops &&
        artisanShopOptions.length > 0 && (
          <Select
            options={artisanShopOptions}
            defaultValue={artisanShopOptions[0]}
            styles={customStyles}
            onChange={handleSelectChange}
          />
        )}
    </div>
  );
};

FilterByArtisanShop.propTypes = {
  setSelectedFilters: PropTypes.func.isRequired,
};
