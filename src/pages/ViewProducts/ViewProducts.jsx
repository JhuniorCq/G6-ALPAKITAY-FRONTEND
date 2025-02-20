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
    responseProducts,
    loadingProducts,
    errorProducts,
    handleGetProducts,
  } = useContextProducts();
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
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
    if (responseProducts) {
      console.log("Filtros seleccionados: ", selectedFilters);

      const priceOption = selectedFilters.price;
      const artisanShopOption = selectedFilters.artisanShop;

      // Función que determina si un producto cumple con los filtros seleccionados
      const isProductAccepted = (product) => {
        const isAllPrice = priceOption.label === ALL_OPTION;
        const isAllArtisanShop = artisanShopOption.label === ALL_OPTION;

        if (isAllPrice && isAllArtisanShop) {
          return true;
        }

        if (isAllArtisanShop) {
          return (
            product.price >= priceOption.min && product.price <= priceOption.max
          );
        }

        if (isAllPrice) {
          return product.artisanShop === artisanShopOption.label;
        }

        return (
          product.price >= priceOption.min &&
          product.price <= priceOption.max &&
          product.artisanShop === artisanShopOption.label
        );
      };

      // Filtrar los productos usando la función
      const acceptedProducts = responseProducts.filter(isProductAccepted);

      console.log("Productos filtrados: ", acceptedProducts);

      setFilteredProducts(acceptedProducts);
    }
  }, [selectedFilters, responseProducts]);

  return (
    <section className="view-products">
      <h1 className="view-products__title">{category ?? "Productos"}</h1>

      <ProductFilters setSelectedFilters={setSelectedFilters} />

      <ul className="view-products__list">
        {loadingProducts && <p>Cargando ...</p>}

        {!loadingProducts && errorProducts && <p>{errorProducts}</p>}

        {!loadingProducts && !errorProducts && filteredProducts && (
          <>
            {filteredProducts.length === 0 ? (
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
                  // description={product.description}
                  category={product.category}
                  artisanShop={product.artisanShop}
                />
              ))
            )}
          </>
        )}
      </ul>
    </section>
  );
};
