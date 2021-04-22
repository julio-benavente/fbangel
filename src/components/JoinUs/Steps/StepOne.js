import React, { useEffect, memo } from "react";
import { useFormContext, useController } from "react-hook-form";

// Components
import OptionInput from "../OptionInput";

// Styles
import { FormOne } from "../../../styles/JoinUsPageStyles";

const StepOne = () => {
  const methods = useFormContext();

  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <FormOne>
      <OptionInput
        className="isAdult"
        type="radio"
        width="short"
        options={[
          ["Sí", "si"],
          ["No", "no"],
        ]}
        question="¿Eres mayor de edad?"
        error={
          errors.stepOne &&
          errors.stepOne.isAdult &&
          errors.stepOne.isAdult.message
        }
        register={register("stepOne.isAdult", {
          required: {
            value: true,
            message: "Este campo es obligatorio",
          },
        })}
      />

      <OptionInput
        width="short"
        className="accountIsReal"
        type="radio"
        options={[
          ["Sí", "si"],
          ["No", "no"],
        ]}
        question="¿Estás creando la solicitud con tu perfil real de Facebook?"
        register={register("stepOne.accountIsReal", {
          required: {
            value: true,
            message: "Este campo es obligatorio",
          },
        })}
      />
      <OptionInput
        width="short"
        className="isFirstTime"
        type="radio"
        options={[
          ["Sí", "si"],
          ["No", "no"],
        ]}
        question="¿Tú o alguien más ha utilizado tu cuenta antes para crear publicidad?"
        register={register("stepOne.isFirstTime", {
          required: {
            value: true,
            message: "Este campo es obligatorio",
          },
        })}
      />
      <OptionInput
        width="short"
        className="isOneYear"
        type="radio"
        options={[
          ["Sí", "si"],
          ["No", "no"],
        ]}
        question="¿Tu cuenta tiene más de un año?"
        register={register("stepOne.isOneYear", {
          required: {
            value: true,
            message: "Este campo es obligatorio",
          },
        })}
      />
      <OptionInput
        width="short"
        className="haveFriends"
        type="radio"
        options={[
          ["Sí", "si"],
          ["No", "no"],
        ]}
        question="¿Tienes más de 100 amigos en Facebook?"
        register={register("stepOne.haveFriends", {
          required: {
            value: true,
            message: "Este campo es obligatorio",
          },
        })}
      />
    </FormOne>
  );
};

export default StepOne;
