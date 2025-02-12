import { IoMdClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { ShoppingCartProduct } from "../ShoppingCartProduct/ShoppingCartProduct";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";
import "./ShoppingCart.css";
import { calculateTotalCost, quantityOfItems } from "../../utils/logic";
import { modalConfirmationShoppingCart } from "../../utils/notifications/modals";

export const ShoppingCart = ({ shoppingCartOpened, closeShoppingCart }) => {
  const { shoppingCart, removeAllProductsCart } = useContextShoppingCart();

  const deleteAllProductsCart = () => {
    removeAllProductsCart();
    modalConfirmationShoppingCart({
      title: "¿Estás seguro?",
      text: "Se eliminarán todos los productos del carrito",
      icon: "warning",
      confirmTitle: "Productos eliminados",
      confirmText: "El carrito de compras ha sido vaciado",
      confirmIcon: "success",
    });
  };

  return (
    <div
      className={
        shoppingCartOpened
          ? "shopping-cart__background shopping-cart__background--show"
          : "shopping-cart__background"
      }
      onClick={closeShoppingCart}
    >
      <div
        className={
          shoppingCartOpened
            ? "shopping-cart__box shopping-cart__box--show"
            : "shopping-cart__box"
        }
        onClick={(event) => event.stopPropagation()}
      >
        <div className="shopping-cart__header">
          <p className="shopping-cart__header-title">
            CARRITO DE COMPRAS ({quantityOfItems(shoppingCart)})
          </p>
          <IoMdClose
            className="shopping-cart__close-button"
            onClick={closeShoppingCart}
          />
        </div>

        <ul className="shopping-cart__main">
          {shoppingCart.length === 0 ? (
            <li className="shopping-cart__empty-cart-text">
              No hay productos en el carrito
            </li>
          ) : (
            shoppingCart.map((product) => (
              <ShoppingCartProduct
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                quantity={product.quantity}
              />
            ))
          )}
        </ul>

        <div className="shopping-cart__footer">
          <div className="shopping-cart__total-cost-box">
            <p className="shopping-cart__total-cost">
              TOTAL: S/. {calculateTotalCost(shoppingCart).toFixed(2)}
            </p>
            <FaTrashAlt
              className="shopping-cart__clear-all-button"
              onClick={deleteAllProductsCart}
            />
          </div>
          <button className="shopping-cart__buy-button">Realizar compra</button>
        </div>
      </div>
    </div>
  );
};
