import { useNavigate } from "react-router-dom";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { useMemo } from "react";
import { KEY_ORDER_DATA_LOCAL_STORAGE } from "../../utils/constants";
import { BsCartCheck } from "react-icons/bs";
import { useContextMethods } from "../../hooks/useContextMethods";
import "./OrderDetails.css";

export const OrderDetails = () => {
  const { responseMethods, loadingMethods, errorMethods } = useContextMethods();
  const navigate = useNavigate();
  const order = useMemo(
    () => JSON.parse(window.localStorage.getItem(KEY_ORDER_DATA_LOCAL_STORAGE)),
    []
  );

  const goToHome = () => {
    window.localStorage.removeItem(KEY_ORDER_DATA_LOCAL_STORAGE);
    navigate("/");
  };

  const renderPaymentDetails = () => {
    if (order.formData.payment === responseMethods.paymentOptions[0].name) {
      return (
        <>
          <h2>Tu pedido ha sido pagado con éxito</h2>
          <p>
            Muchas gracias por tu compra, a continuación podrás ver el resumen
            de tu pedido.
          </p>
        </>
      );
    }

    if (order.formData.payment === responseMethods.paymentOptions[1].name) {
      return (
        <>
          <h2>Tu pedido ha sido reservado con éxito</h2>
          <p>
            Por favor, para confirmar la compra realiza el pago al siguiente
            número.
          </p>

          <h3>Yape</h3>
          <p>987654321</p>
        </>
      );
    }

    return <p>Ocurrió un problema</p>;
  };

  if (!order) {
    return (
      <p>
        <button onClick={goToHome}>Volver al inicio</button>
      </p>
    );
  }

  if (loadingMethods) return <p>Cargando ...</p>;

  if (errorMethods) return <p>{errorMethods}</p>;

  if (responseMethods) {
    return (
      <section className="order-details">
        <div className="order-details__box">
          <div className="order-details__thankyou-box">
            <BsCartCheck className="order-details__check-icon" />
            <p>¡Gracias, {order.formData.names}!</p>
          </div>

          <div className="order-details__payment-details">
            {renderPaymentDetails()}
          </div>

          <div className="order-details__form-details">
            <h2>Detalles del pedido</h2>

            <div className="order-details__form-details-box">
              <div>
                <div>
                  <h3>Contacto</h3>
                  <p>{order.formData.names}</p>
                  <p>{order.formData.lastNames}</p>
                  <p>{order.formData.dni}</p>
                  <p>{order.formData.email}</p>
                  <p>{order.formData.cellPhone}</p>
                </div>

                <div>
                  <h3>Método de envío</h3>
                  <p className="order-details__shipping-method">
                    {order.formData.shipping}
                  </p>
                </div>
              </div>

              <div>
                {order.formData.shipping ===
                  responseMethods?.shippingOptions[0].name && (
                  <div>
                    <h3>Agencia</h3>
                    <p>{order.formData.agency}</p>
                  </div>
                )}

                <div>
                  <h3>Método de pago</h3>
                  <p className="order-details__payment-method">
                    {order.formData.payment}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="order-details__back-button" onClick={goToHome}>
            Volver al inicio
          </button>
        </div>
        <div className="order-details__order-summary-box">
          <OrderSummary
            orderedProducts={order.orderedProducts}
            shippingMethod={order.formData.shipping}
          />
        </div>
      </section>
    );
  }
};
