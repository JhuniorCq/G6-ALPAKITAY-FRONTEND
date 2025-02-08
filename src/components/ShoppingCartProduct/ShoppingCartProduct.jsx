import { RiDeleteBack2Fill } from "react-icons/ri";
import "./ShoppingCartProduct.css";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";

export const ShoppingCartProduct = ({ id, name, image, price, quantity }) => {
  const { removeProductCart } = useContextShoppingCart();

  return (
    <li className="shooping-cart-product">
      <img className="shopping-cart-product__image" src={image} alt={name} />
      <div className="shopping-cart-product__info">
        <div className="shopping-cart-product__name-box">
          <h2 className="shopping-cart-product__name">{name}</h2>
          <RiDeleteBack2Fill
            className="shopping-cart-product__delete-button"
            onClick={() => removeProductCart(id)}
          />
        </div>
        <div className="shopping-cart-product__options-box">
          <div className="shopping-cart-product__options">
            <button className="shopping-cart-product__option">-</button>
            <span className="shopping-cart-product__quantity">{quantity}</span>
            <button className="shopping-cart-product__option">+</button>
          </div>
          <p className="shopping-cart-product__cost shopping-cart-product__cost--unit">
            S/.{price}
          </p>
          <p className="shopping-cart-product__cost shopping-cart-product__cost--total">
            S/. {(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </li>
  );
};
