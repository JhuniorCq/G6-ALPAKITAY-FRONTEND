import Select from "react-select";
import { ALL_OPTION } from "../../utils/constants";
import PropTypes from "prop-types";
import "./FilterByPrice.css";

const priceOptions = [
  {
    value: 0,
    label: ALL_OPTION,
  },
  {
    value: 1,
    label: "0 a 50",
    min: 0,
    max: 50,
  },
  {
    value: 2,
    label: "51 a 100",
    min: 51,
    max: 100,
  },
  {
    value: 3,
    label: "101 a 150",
    min: 101,
    max: 150,
  },
  {
    value: 4,
    label: "151 a 200",
    min: 151,
    max: 200,
  },
  {
    value: 5,
    label: "201 a más",
    min: 201,
    max: 999999,
  },
];

export const FilterByPrice = ({ setSelectedFilters, customStyles }) => {
  const handleSelectChange = (selectedOption) => {
    setSelectedFilters((prev) => ({ ...prev, price: selectedOption }));
  };

  return (
    <div className="filter-by-price">
      <p className="filter-by-price__name">Precios: </p>
      <Select
        options={priceOptions}
        defaultValue={priceOptions[0]}
        styles={customStyles}
        onChange={handleSelectChange}
      />
    </div>
  );
};

FilterByPrice.propTypes = {
  setSelectedFilters: PropTypes.func.isRequired,
};
