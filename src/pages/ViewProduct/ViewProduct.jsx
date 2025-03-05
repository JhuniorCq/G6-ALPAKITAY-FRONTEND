import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useGet } from "../../hooks/useGet";
import { URL_BACKEND, URL_SERVER } from "../../utils/constants";
import "./ViewProduct.css";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";
import { shoppingCartToast } from "../../utils/notifications/toasts";

export const ViewProduct = () => {
  const { addProductCart, shoppingCart } = useContextShoppingCart();
  const { id } = useParams();
  const {
    responseGet: responseProduct,
    loadingGet: loadingProduct,
    errorGet: errorProduct,
    getData: getProduct,
  } = useGet({
    loading: true,
  });

  const existingProductCart = useMemo(
    () => shoppingCart.some((product) => product.id === Number(id)),
    [shoppingCart]
  );

  const addProductShoppingCart = () => {
    if (existingProductCart) {
      shoppingCartToast({
        title: "Este producto ya existe en el carrito",
        position: "bottom-left",
        icon: "warning",
      });

      return;
    }

    addProductCart(responseProduct);

    shoppingCartToast({
      title: "Se ha agregado el producto al carrito",
      position: "bottom-left",
      icon: "success",
    });
  };

  useEffect(() => {
    getProduct({ url: `${URL_BACKEND}/api/products/${id}` });
  }, []);

  if (loadingProduct) return <p>Cargando ...</p>;

  if (errorProduct) return <p>{errorProduct}</p>;

  if (responseProduct) {
    return (
      <section className="view-product">
        <div className="view-product__image-box">
          <img
            src={responseProduct.imageUrl}
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
              {responseProduct.artisanShop ?? "-"}
            </span>
          </p>
          <p className="view-product__description">
            {responseProduct.description}
          </p>
          <button
            className="view-product__add-button"
            onClick={addProductShoppingCart}
          >
            Agregar al carrito
          </button>
        </div>
      </section>
    );
  }
};
