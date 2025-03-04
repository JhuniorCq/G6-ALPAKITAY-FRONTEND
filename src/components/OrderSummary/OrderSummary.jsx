import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";
import "./OrderSummary.css";

export const OrderSummary = () => {
  const { shoppingCart } = useContextShoppingCart();
  return (
    <>
      <ul className="order-summary">
        {shoppingCart.length === 0 ? (
          <li className="order-summary__empty-cart-message">
            No existen productos en el carrito
          </li>
        ) : (
          shoppingCart.map((product) => (
            <li key={product.id} className="order-summary__product">
              <div className="order-summary__image-box">
                <img
                  src={product.image}
                  alt={product.name}
                  className="order-summary__image"
                />
                <span className="order-summary__quantity">
                  {product.quantity}
                </span>
              </div>
              <div className="order-summary__info">
                <div>
                  <h3 className="order-summary__name">{product.name}</h3>
                  <p className="order-summary__artisan-shop">
                    {product.artisanShop}
                  </p>
                </div>
                <p className="order-summary__price">S/. {product.price}</p>
              </div>
            </li>
          ))
        )}
      </ul>
      {/* <pre>{JSON.stringify(shoppingCart, null, 2)}</pre> */}
    </>
  );
};
