import { useContextProducts } from "../../hooks/useContextProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilters } from "../../components/ProductFilters/ProductFilters";
import "./ViewProducts.css";

export const ViewProducts = () => {
  const { category = null } = useParams();
  const {
    /*products,*/ responseProducts,
    loadingProducts,
    errorProducts,
    handleGetProducts,
  } = useContextProducts();
  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const data = await handleGetProducts({ queryParameter: category });
      console.log(":D", data);
      setFilteredProducts(data);
    };

    getProducts();
  }, [category]);

  return (
    <section className="view-products">
      <h1 className="view-products__title">{category ?? "Productos"}</h1>

      <ProductFilters
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      {console.log("filteredProducts: ", filteredProducts, loadingProducts)}
      <ul className="view-products__list">
        {loadingProducts ? (
          <p>Cargando ...</p>
        ) : errorProducts ? (
          <p>{errorProducts}</p>
        ) : (
          filteredProducts &&
          (filteredProducts.length === 0 ? (
            <p>No se encontraron productos</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                artisan={product.artisan}
              />
            ))
          ))
        )}
      </ul>
    </section>
  );
};
