import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGet } from "../../hooks/useGet";
import { URL_SERVER } from "../../utils/constants";
import "./ViewProduct.css";

export const ViewProduct = () => {
  const { id } = useParams();
  const {
    responseGet: responseProduct,
    loadingGet: loadingProduct,
    errorGet: errorProduct,
    getData: getProduct,
  } = useGet({
    loading: true,
  });

  useEffect(() => {
    getProduct({ url: `${URL_SERVER}/products/${id}` });
  }, []);

  return loadingProduct ? (
    <p>Cargando ...</p>
  ) : errorProduct ? (
    <p>{errorProduct}</p>
  ) : (
    responseProduct && (
      <>
        <section className="view-product">
          <div className="view-product__image-box">
            <img
              src={responseProduct.image}
              alt={responseProduct.name}
              className="view-product__image"
            />
          </div>
          <div className="view-product__info">
            <p className="view-product__stock-text">
              ¡Stock limitado! Solo quedan{" "}
              <span className="view-product__stock">
                {responseProduct.stockQuantity}
              </span>{" "}
              unidades
            </p>
            <p className="view-product__price">
              S/. {responseProduct.price.toFixed(2)}
            </p>
            <h1 className="view-product__name">{responseProduct.name}</h1>
            <p className="view-product__artisan-text">
              Producto fabricado por{" "}
              <span className="view-product__artisan-name">
                {responseProduct.artisanShop}
              </span>
            </p>
            <p className="view-product__description">
              {responseProduct.description}
            </p>
            <button className="view-product__add-button">
              Agregar al carrito
            </button>
          </div>
        </section>
      </>
    )
  );
};
