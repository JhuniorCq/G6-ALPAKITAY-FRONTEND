import { FilterByArtisanShop } from "../FilterByArtisanShop/FilterByArtisanShop";
import { FilterByPrice } from "../FilterByPrice/FilterByPrice";
import PropTypes from "prop-types";
import "./ProductFilters.css";

const customStyles = {
  control: (defaultStyles, state) => ({
    ...defaultStyles,
    cursor: "pointer",
    fontSize: "0.95rem",
    minWidth: "180px",
  }),
  option: (defaultStyles, state) => ({
    ...defaultStyles,
    fontSize: "0.95rem",
    cursor: "pointer",
  }),
  indicatorSeparator: (defaultStyles, state) => ({
    ...defaultStyles,
    display: "none",
  }),
};

export const ProductFilters = ({ setSelectedFilters }) => {
  return (
    <div className="product-filters">
      <FilterByPrice
        setSelectedFilters={setSelectedFilters}
        customStyles={customStyles}
      />
      <FilterByArtisanShop
        setSelectedFilters={setSelectedFilters}
        customStyles={customStyles}
      />
    </div>
  );
};

ProductFilters.propTypes = {
  setSelectedFilters: PropTypes.func.isRequired,
};
