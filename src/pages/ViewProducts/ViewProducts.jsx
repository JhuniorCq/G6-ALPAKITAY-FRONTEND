import { useContextProducts } from "../../hooks/useContextProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductFilters } from "../../components/ProductFilters/ProductFilters";
import { ALL_OPTION } from "../../utils/constants";
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
  const [selectedFilters, setSelectedFilter] = useState({
    price: {
      value: 0,
      label: ALL_OPTION,
    },
    artisanShop: {
      value: 0,
      label: ALL_OPTION,
    },
  });

  useEffect(() => {
    const getProducts = async () => {
      const data = await handleGetProducts({ queryParameter: category });
      console.log("Los productos de esta sección: ", data);
      setFilteredProducts(data);
    };

    getProducts();
  }, [category]);

  // Filtros
  useEffect(() => {
    // El if (responseProducts) es para que solo se haga el filtrado cuando responseProducts ya tenga un VALOR
    if (responseProducts) {
      console.log("Filtros seleccionados: ", selectedFilters);

      const priceOption = selectedFilters.price;
      const artisanShopOption = selectedFilters.artisanShop;

      // Hacer el filtrado de productos acá
      const acceptedProducts = responseProducts.filter((product) => {
        const condition =
          priceOption.label === ALL_OPTION &&
          artisanShopOption.label === ALL_OPTION
            ? true
            : artisanShopOption.label === ALL_OPTION
            ? product.price >= priceOption.min &&
              product.price <= priceOption.max
            : priceOption.label === ALL_OPTION
            ? product.artisanShop === artisanShopOption.label
            : product.price >= priceOption.min &&
              product.price <= priceOption.max &&
              product.artisanShop === artisanShopOption.label;

        return condition;
      });

      console.log("Productos filtrados: ", acceptedProducts);

      setFilteredProducts(acceptedProducts);
    }
  }, [selectedFilters]);

  return (
    <section className="view-products">
      <h1 className="view-products__title">{category ?? "Productos"}</h1>

      <ProductFilters setSelectedFilter={setSelectedFilter} />

      <ul className="view-products__list">
        {loadingProducts ? (
          <p>Cargando ...</p>
        ) : errorProducts ? (
          <p>{errorProducts}</p>
        ) : (
          filteredProducts &&
          (filteredProducts.length === 0 ? (
            <p className="view-products__not-products">
              No se encontraron productos
            </p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
                category={product.category}
                artisanShop={product.artisanShop}
              />
            ))
          ))
        )}
      </ul>
    </section>
  );
};
