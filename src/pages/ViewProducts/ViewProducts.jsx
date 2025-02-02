import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ViewProducts.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const ViewProducts = () => {
  const { category = null } = useParams();
  const { products, loadingProducts, errorProducts, handleGetProducts } =
    useProducts();

  useEffect(() => {
    handleGetProducts({ queryParameter: category });
  }, [category]);

  return (
    <section className="view-products">
      <h1 className="view-products__title">{category ?? "Productos"}</h1>

      {/* TODO: Los filtros se harían por precios y por artesanos */}
      <div>
        {/* <button>Filtrar por precio</button>
        <button>Filtrar por artesano</button> */}
      </div>

      <ul className="view-products__list">
        {loadingProducts ? (
          <p>Cargando ...</p>
        ) : errorProducts ? (
          <p>{errorProducts}</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              textileArtisan={product.textileArtisan}
            />
          ))
        )}
      </ul>
    </section>
  );
};
