import { calculateTotalCost, quantityOfItems } from "../../utils/logic";
import PropTypes from "prop-types";
import { useContextMethods } from "../../hooks/useContextMethods";
import { useMemo } from "react";
import { SHIPPING_COST_AGENCY } from "../../utils/constants";
import "./OrderSummary.css";

export const OrderSummary = ({ orderedProducts, shippingMethod }) => {
  const { responseMethods, loadingMethods, errorMethods } = useContextMethods();

  const shippingIsAgency = useMemo(
    () => shippingMethod === responseMethods?.shippingOptions[0].name,
    [shippingMethod, responseMethods]
  );

  return (
    <div className="order-summary">
      <ul className="order-summary__product-list">
        {orderedProducts.length === 0 ? (
          <li className="order-summary__empty-cart-message">
            No existen productos en el carrito
          </li>
        ) : (
          orderedProducts.map((product) => (
            <li key={product.id} className="order-summary__product">
              <div className="order-summary__image-box">
                <img
                  src={product.imageUrl}
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
                    {product.artisanShop ?? "-"}
                  </p>
                </div>
                <p className="order-summary__price">S/. {product.price}</p>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="order-summary__cost-box">
        {loadingMethods && <p>Cargando ...</p>}

        {!loadingMethods && errorMethods && <p>{errorMethods}</p>}

        {!loadingMethods && !errorMethods && responseMethods && (
          <>
            <div className="order-summary__subtotal-cost-box">
              <p>Subtotal ({quantityOfItems(orderedProducts)} items)</p>
              <p>S/. {calculateTotalCost(orderedProducts).toFixed(2)}</p>
            </div>
            <div className="order-summary__shipping-cost-box">
              <p>Costo de envío</p>
              <p>
                {shippingIsAgency
                  ? `S/. ${SHIPPING_COST_AGENCY.toFixed(2)}`
                  : "FREE"}
              </p>
            </div>
            <div className="order-summary__total-cost-box">
              <p>TOTAL</p>
              <div className="order-summary__total-cost">
                <span className="order-summary__currency-code">PEN</span>
                <p>
                  S/.{" "}
                  {(
                    calculateTotalCost(orderedProducts) +
                    (shippingIsAgency ? SHIPPING_COST_AGENCY : 0)
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  shippingMethod: PropTypes.string.isRequired,
  orderedProducts: PropTypes.array.isRequired,
};
