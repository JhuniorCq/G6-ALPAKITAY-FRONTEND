import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentFormSchema } from "../../validations/paymentFormValidations";
import { useEffect, useId, useState } from "react";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FormInput } from "../../components/FormInput/FormInput";
import { FormInputOptions } from "../../components/FormInputOptions/FormInputOptions";
import { AgencyBox } from "../../components/AgencyBox/AgencyBox";
import { useNavigate } from "react-router-dom";
import { useContextMethods } from "../../hooks/useContextMethods";
import "./PaymentForm.css";
import { placeOrderToast } from "../../utils/notifications/toasts";
import { useContextShoppingCart } from "../../hooks/useContextShoppingCart";
import { KEY_ORDER_DATA_LOCAL_STORAGE } from "../../utils/constants";

export const PaymentForm = () => {
  const { shoppingCart, removeAllProductsCart } = useContextShoppingCart();
  const { responseMethods, loadingMethods, errorMethods } = useContextMethods();

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [shippingMethods, setShippingMethods] = useState([]);

  const id = useId();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
    watch,
    unregister,
  } = useForm({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      shipping: "agencia",
      payment: "paypal",
    },
  });

  const currentShippingMethod = getValues("shipping");

  const onSubmit = (data) => {
    console.log("Enviando datos al servidor: ", data);
    placeOrderToast({
      icon: "success",
      position: "top-end",
      title: "Pedido realizado con éxito",
    });

    window.localStorage.setItem(
      KEY_ORDER_DATA_LOCAL_STORAGE,
      JSON.stringify({ formData: data, orderedProducts: shoppingCart })
    );

    removeAllProductsCart();

    navigate("/order-details");
  };

  const onError = (errors) => {
    console.log("Errores en el formulario: ", errors);
    placeOrderToast({
      icon: "error",
      position: "top-end",
      title: "Ocurrió un problema al realizar su pedido",
    });
  };

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!responseMethods) return;

    const { shippingOptions, paymentOptions } = responseMethods;

    setShippingMethods(shippingOptions);
    setPaymentMethods(paymentOptions);
  }, [responseMethods]);

  useEffect(() => {
    if (currentShippingMethod === shippingMethods[1]?.name) {
      unregister("agency");
    }
  }, [currentShippingMethod]);

  if (loadingMethods) return <p>Cargando ...</p>;

  if (errorMethods) return <p>{errorMethods}</p>;

  if (
    responseMethods &&
    shippingMethods.length > 0 &&
    paymentMethods.length > 0
  ) {
    return (
      <section className="payment-form">
        <div className="payment-form__form-box">
          <div className="payment-form__header">
            <button className="payment-form__back-button" onClick={goToHome}>
              <IoIosArrowRoundBack className="payment-form__back-icon" /> Volver
            </button>
            <h1 className="payment-form__title">ALPAKITAY</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="payment-form__form"
          >
            <section className="payment-form__section">
              <h2 className="payment-form__section-title">Contacto</h2>

              <FormInput
                type="text"
                id={`${id}-email`}
                placeholder="Correo"
                label="Correo"
                name="email"
                register={register}
                errors={errors}
              />

              <FormInput
                type="text"
                id={`${id}-names`}
                placeholder="Nombres"
                label="Nombres"
                name="names"
                register={register}
                errors={errors}
              />

              <FormInput
                type="text"
                id={`${id}-lastNames`}
                placeholder="Apellidos"
                label="Apellidos"
                name="lastNames"
                register={register}
                errors={errors}
              />

              <FormInput
                type="text"
                id={`${id}-dni`}
                placeholder="DNI"
                label="DNI"
                name="dni"
                register={register}
                errors={errors}
              />

              <FormInput
                type="text"
                id={`${id}-cellPhone`}
                placeholder="Número de celular"
                label="Celular"
                name="cellPhone"
                register={register}
                errors={errors}
              />
            </section>

            <section className="payment-form__section">
              <h2 className="payment-form__section-title">Envío</h2>

              <FormInputOptions
                options={shippingMethods}
                name="shipping"
                register={register}
                errors={errors}
              />

              {currentShippingMethod === shippingMethods[0].name ? (
                <AgencyBox name="agency" control={control} errors={errors} />
              ) : (
                <div>Sucursal de Alpakitay ...</div>
              )}
            </section>

            <section className="payment-form__section">
              <h2 className="payment-form__section-title">Pago</h2>

              <FormInputOptions
                options={paymentMethods}
                name="payment"
                register={register}
                errors={errors}
              />
            </section>

            <button className="payment-form__submit-button" type="submit">
              Finalizar pedido
            </button>

            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>

        <div className="payment-form__order-summary-box">
          <OrderSummary
            orderedProducts={shoppingCart}
            shippingMethod={currentShippingMethod}
          />
        </div>
      </section>
    );
  }
};
