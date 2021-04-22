import React, { useState, useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";

// Components
import OptionInput from "../OptionInput";
import TextInput from "../TextInput";

// Styles
import { FormFour } from "../../../styles/JoinUsPageStyles";

const StepFour = () => {
  const methods = useFormContext();
  const {
    register,
    getValues,
    control,
    unregister,
    formState: { errors },
  } = methods;

  const paymentMethod = useWatch({
    control,
    name: "stepFour.paymentMethod",
  });

  useEffect(() => {
    if (paymentMethod === "banco-peru") {
      unregister(["stepFour.paypalEmail", "stepFour.paypalEmailConfirmation"]);
    }

    if (paymentMethod === "paypal") {
      unregister([
        "stepFour.holderName",
        "stepFour.bankAngency",
        "stepFour.bankAccountCode",
      ]);
    }
  }, [paymentMethod]);

  return (
    <FormFour>
      <OptionInput
        className="paymentMethod"
        question="Método de pago"
        type="radio"
        options={[
          ["Paypal", "paypal"],
          ["Cuenta bancaria - Solo para Perú", "banco-peru"],
        ]}
        error={
          errors.stepFour &&
          errors.stepFour.paymentMethod &&
          errors.stepFour.paymentMethod.message
        }
        register={register("stepFour.paymentMethod", {
          required: {
            value: true,
            message: "Por favor, seleccione un método de pago",
          },
        })}
      />
      {paymentMethod === "paypal" && (
        <>
          <TextInput
            className="paypalEmail"
            question="Email de paypal"
            error={
              errors.stepFour &&
              errors.stepFour.paypalEmail &&
              errors.stepFour.paypalEmail.message
            }
            register={register("stepFour.paypalEmail", {
              required: {
                value: true,
                message: "Por favor, indique su email de paypal",
              },
              pattern: {
                value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message: "Ingrese un email valido",
              },
              validate: {
                min: (v) =>
                  v.length < 6
                    ? "Los email de paypal cuenta con por lo menos 6 caracteres"
                    : true,
              },
            })}
          />

          <TextInput
            className="paypalEmailConfirmation"
            question="Confirma tu email de Paypal"
            error={
              errors.stepFour &&
              errors.stepFour.paypalEmailConfirmation &&
              errors.stepFour.paypalEmailConfirmation.message
            }
            register={register("stepFour.paypalEmailConfirmation", {
              required: {
                value: true,
                message: "Por favor, confirme su email de paypal",
              },
              validate: {
                isTheSame: (v) =>
                  !(v === getValues("stepFour.paypalEmail"))
                    ? "Lo correos no coinciden"
                    : true,
              },
            })}
          />
          <p className="message">
            Verifique que su correo Paypal es correcto al 100%. No nos hacemos
            responsables por datos incorrectos.
          </p>
        </>
      )}

      <>
        <TextInput
          className="holderName"
          question="Nombre del titular"
          error={
            errors.stepFour &&
            errors.stepFour.holderName &&
            errors.stepFour.holderName.message
          }
          register={register("stepFour.holderName", {
            requried: {
              value: true,
              message: "Por favor, ingrese el nombre del titular",
            },
          })}
        />
        <TextInput
          className="bankAngency"
          question="Agencia bancaria"
          error={
            errors.stepFour &&
            errors.stepFour.bankAngency &&
            errors.stepFour.bankAngency.message
          }
          register={register("stepFour.bankAngency", {
            requried: {
              value: true,
              message: "Por favor, ingrese la agencia bancaria",
            },
          })}
        />
        <TextInput
          className="bankAccountCode"
          question="Código de Cuento Interbancaria"
          error={
            errors.stepFour &&
            errors.stepFour.bankAccountCode &&
            errors.stepFour.bankAccountCode.message
          }
          register={register("stepFour.bankAccountCode", {
            requried: {
              value: true,
              message: "Por favor, ingrese el código de cuenta interbancaria",
            },
          })}
        />
        <p className="message">
          Solo válido para CCI peruano. Verifique que su CCI es 100% correcto.
          No nos hacemos responsables de datos incorrectos.
        </p>
      </>

      <TextInput
        className="referral"
        question="Si tienes un referente añade aquí su código"
        error={
          errors.stepFour &&
          errors.stepFour.referral &&
          errors.stepFour.referral.message
        }
        register={register("stepFour.referral")}
      />

      <OptionInput
        width="full"
        className="termsAndConditions"
        type="checkbox"
        options={[["Acepto los Términos y Condiciones", "si"]]}
        error={
          errors.stepFour &&
          errors.stepFour.termsAndConditions &&
          errors.stepFour.termsAndConditions.message
        }
        register={register("stepFour.termsAndConditions", {
          required: {
            value: true,
            message: "Por favor, acepte los Términos y Condiciones",
          },
        })}
      />

      <OptionInput
        width="full"
        className="gdprAgreement"
        type="checkbox"
        options={[
          [
            "Doy mi consentimiento para que este sitio web almacene mi información enviada para que puedan responder a mi consulta.",
            "si",
          ],
        ]}
        error={
          errors.stepFour &&
          errors.stepFour.gdprAgreement &&
          errors.stepFour.gdprAgreement.message
        }
        register={register("stepFour.gdprAgreement", {
          required: {
            value: true,
            message: "Por favor, acepte el Acuerdo GDPR",
          },
        })}
      />
    </FormFour>
  );
};

export default StepFour;
