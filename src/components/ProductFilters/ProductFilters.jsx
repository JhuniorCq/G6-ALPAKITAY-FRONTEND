import { FilterByArtisanShop } from "../FilterByArtisanShop/FilterByArtisanShop";
import { FilterByPrice } from "../FilterByPrice/FilterByPrice";
import "./ProductFilters.css";

export const ProductFilters = ({ setSelectedFilter }) => {
  return (
    <div className="product-filters">
      <FilterByPrice setSelectedFilter={setSelectedFilter} />
      <FilterByArtisanShop setSelectedFilter={setSelectedFilter} />
    </div>
  );
};
