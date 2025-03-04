import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentFormSchema } from "../../validations/paymentFormValidations";
import { useEffect, useId } from "react";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FormInput } from "../../components/FormInput/FormInput";
import "./PaymentForm.css";
import { FormInputOptions } from "../../components/FormInputOptions/FormInputOptions";
import Select from "react-select";
import { AgencyBox } from "../../components/AgencyBox/AgencyBox";
import { useNavigate } from "react-router-dom";

const PAYMENT_OPTIONS = [
  {
    id: 1,
    name: "paypal",
    message:
      "Después de hacer clic en “Pagar ahora”, serás redirigido a Paypal para completar tu compra de forma segura.",
  },
  {
    id: 2,
    name: "yape",
    message: "El número aparecerá después de hacer clic en “Finalizar pedido”.",
  },
];

const SHIPPING_OPTIONS = [
  {
    id: 1,
    name: "agencia",
  },
  {
    id: 2,
    name: "recojo",
  },
];

export const PaymentForm = () => {
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

  const shippingMethod = watch("shipping");

  const onSubmit = (data) => {
    console.log("Datos del formulario que se enviarán al servidor: ", data);
    alert("Pedido realizado con éxito");
  };

  const onError = (errors) => {
    console.log("Errores del formulario: ", errors);
    alert("Ingrese los datos correctamente");
  };

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (shippingMethod === SHIPPING_OPTIONS[1].name) {
      unregister("agency");
    }
  }, [shippingMethod]);

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
              options={SHIPPING_OPTIONS}
              name="shipping"
              register={register}
              errors={errors}
            />

            {getValues("shipping") === SHIPPING_OPTIONS[0].name ? (
              <AgencyBox name="agency" control={control} errors={errors} />
            ) : (
              <div>Sucursal de Alpakitay ...</div>
            )}
          </section>

          <section className="payment-form__section">
            <h2 className="payment-form__section-title">Pago</h2>

            <FormInputOptions
              options={PAYMENT_OPTIONS}
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
        <OrderSummary />
      </div>
    </section>
  );
};
