import React from "react";
import { useFormContext } from "react-hook-form";

// Components
import OptionInput from "../OptionInput";
import TextInput from "../TextInput";

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
        width="short"
        className="isAdult"
        type="radio"
        options={[
          ["Sí", "si"],
          ["No", "no"],
        ]}
        question="¿Eres mayor de edad?"
        register={register("isAdult", {
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
        register={register("accountIsReal", {
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
        register={register("isFirstTime", {
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
        register={register("isOneYear", {
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
        register={register("haveFriends", {
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
