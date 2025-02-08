import { FilterByArtisan } from "../FilterByArtisan/FilterByArtisan";
import { FilterByPrice } from "../FilterByPrice/FilterByPrice";
import "./ProductFilters.css";

export const ProductFilters = ({ setSelectedFilter }) => {
  return (
    <div className="product-filters">
      <FilterByPrice setSelectedFilter={setSelectedFilter} />
      <FilterByArtisan setSelectedFilter={setSelectedFilter} />
    </div>
  );
};
