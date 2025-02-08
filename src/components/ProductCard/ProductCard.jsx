import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import "./ProductCard.css";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";

export const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
  category,
  artisan,
}) => {
  const { addProductCart } = useContextShoppingCart();
  const [showAddCartButton, setShowAddCartButton] = useState(false);

  return (
    <li className="product-card">
      <div
        className="product-card__image-box"
        onMouseEnter={() => setShowAddCartButton(true)}
        onMouseLeave={() => setShowAddCartButton(false)}
      >
        <img src={image} alt="" className="product-card__image" />
        <button
          className={
            showAddCartButton
              ? "product-card__add-cart-button product-card__add-cart-button--show"
              : "product-card__add-cart-button"
          }
          onClick={() => addProductCart({ id, name, price, image, artisan })}
        >
          <BsCart2 className="product-card__add-cart-icon" />
        </button>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">S/. {price}</p>
        <p className="product-card__artisan">
          Producto de{" "}
          <span className="product-card__artisan-name">{artisan}</span>
        </p>
      </div>
    </li>
  );
};
