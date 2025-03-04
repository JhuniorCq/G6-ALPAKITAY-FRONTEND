import { z } from "zod";

const paymentFormSchema = z
  .object({
    email: z.string().email({ message: "Correo inválido" }),
    names: z.string().min(1, { message: "Ingrese sus nombres" }),
    lastNames: z.string().min(1, { message: "Ingrese sus apellidos" }),
    dni: z
      .string()
      .regex(/^\d{8}$/, { message: "El DNI debe tener 8 dígitos" }),
    cellPhone: z.string().regex(/^\d{9}$/, {
      message: "El número de celular debe tener 9 dígitos",
    }),
    shipping: z.string().min(1, { message: "Seleccione un método de envío" }),
    payment: z.string().min(1, { message: "Seleccione un método de pago" }),
    agency: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .optional()
      .transform((val) => val?.value),
  })
  .superRefine((data, ctx) => {
    if (data.shipping === "agencia" && !data.agency) {
      ctx.addIssue({
        path: ["agency"],
        message: "Debe seleccionar una agencia",
        code: "custom",
      });
    }

    if (data.shipping === "recojo" && data.agency) {
      delete data.agency;
    }
  });

export { paymentFormSchema };
