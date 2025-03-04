import { RiDeleteBack2Fill } from "react-icons/ri";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";
import { shoppingCartToast } from "../../utils/notifications/toasts";
import PropTypes from "prop-types";
import "./ShoppingCartProduct.css";

export const ShoppingCartProduct = ({ id, name, image, price, quantity }) => {
  const { removeProductCart, increaseProductCart, decreaseProductCart } =
    useContextShoppingCart();

  const deleteProductCart = () => {
    removeProductCart(id);

    shoppingCartToast({
      title: "Producto eliminado del carrito",
      icon: "success",
      position: "bottom-left",
    });
  };

  return (
    <li className="shooping-cart-product">
      <img className="shopping-cart-product__image" src={image} alt={name} />
      <div className="shopping-cart-product__info">
        <div className="shopping-cart-product__name-box">
          <h2 className="shopping-cart-product__name">{name}</h2>
          <RiDeleteBack2Fill
            className="shopping-cart-product__delete-button"
            onClick={deleteProductCart}
          />
        </div>
        <div className="shopping-cart-product__options-box">
          <div className="shopping-cart-product__options">
            <button
              className="shopping-cart-product__option"
              onClick={() => decreaseProductCart(id)}
            >
              -
            </button>
            <span className="shopping-cart-product__quantity">{quantity}</span>
            <button
              className="shopping-cart-product__option"
              onClick={() => increaseProductCart(id)}
            >
              +
            </button>
          </div>
          <p className="shopping-cart-product__cost shopping-cart-product__cost--unit">
            S/.{price.toFixed(2)}
          </p>
          <p className="shopping-cart-product__cost shopping-cart-product__cost--total">
            S/. {(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </li>
  );
};

// El id debe ser de tipo number
ShoppingCartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
