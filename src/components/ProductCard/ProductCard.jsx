import { FaCartShopping } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { useMemo, useState } from "react";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";
import { shoppingCartToast } from "../../utils/notifications/toasts";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductCard.css";

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  category,
  artisanShop,
}) => {
  const { shoppingCart, addProductCart } = useContextShoppingCart();
  const [showAddCartButton, setShowAddCartButton] = useState(false);
  const navigate = useNavigate();
  const existingProductCart = useMemo(
    () => shoppingCart.some((product) => product.id === id),
    [shoppingCart]
  );

  const addProductShoppingCart = (event) => {
    event.stopPropagation();

    if (existingProductCart) {
      shoppingCartToast({
        title: "Este producto ya existe en el carrito",
        position: "bottom-left",
        icon: "warning",
      });

      return;
    }

    addProductCart({ id, name, price, imageUrl, artisanShop });

    shoppingCartToast({
      title: "Se ha agregado el producto al carrito",
      position: "bottom-left",
      icon: "success",
    });
  };

  const goToProductDetails = () => {
    navigate(`/products/${category}/${id}`);
  };

  return (
    <li className="product-card">
      <div
        className="product-card__image-box"
        onMouseEnter={() => setShowAddCartButton(true)}
        onMouseLeave={() => setShowAddCartButton(false)}
        onClick={goToProductDetails}
      >
        <img src={imageUrl} alt="" className="product-card__image" />
        <button
          className={
            showAddCartButton
              ? "product-card__add-cart-button product-card__add-cart-button--show"
              : "product-card__add-cart-button"
          }
          onClick={addProductShoppingCart}
        >
          {existingProductCart ? (
            <FaCheckCircle className="product-card__icon product-card__added-cart-icon" />
          ) : (
            <FaCartShopping className="product-card__icon product-card__add-cart-icon" />
          )}
        </button>
      </div>
      <div className="product-card__info">
        <button className="product-card__name" onClick={goToProductDetails}>
          {name}
        </button>
        <p className="product-card__price">S/. {price}</p>
        <p className="product-card__artisan">
          Producto de{" "}
          <span className="product-card__artisan-name">
            {artisanShop ?? "-"}
          </span>
        </p>
      </div>
    </li>
  );
};

// El id debe ser de tipo number
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  artisanShop: PropTypes.string,
};
