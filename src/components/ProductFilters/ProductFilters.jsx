import { useContextProducts } from "../../hooks/useContextProducts";
import { FilterByArtisan } from "../FilterByArtisan/FilterByArtisan";
import { FilterByPrice } from "../FilterByPrice/FilterByPrice";
import "./ProductFilters.css";

export const ProductFilters = ({ filteredProducts, setFilteredProducts }) => {
  const {
    /*products,*/ responseProducts,
    loadingProducts,
    errorProducts,
    handleGetProducts,
  } = useContextProducts();

  return (
    <div className="product-filters">
      <FilterByPrice
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <FilterByArtisan
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />

      <button onClick={() => setFilteredProducts(responseProducts)}>
        Mostrar todo
      </button>
    </div>
  );
};
