import React from "react";
import { useForm, useFormContext } from "react-hook-form";

// Components
import FileInput from "../FileInput";
import OptionInput from "../OptionInput";
import TextInput from "../TextInput";

// Styles
import { FormThree } from "../../../styles/JoinUsPageStyles";

const StepThree = () => {
  const methods = useFormContext();

  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <FormThree>
      <OptionInput
        width="wide"
        className="frecuency"
        type="radio"
        error={
          errors.step3 &&
          errors.step3.frecuency &&
          errors.step3.frecuency.message
        }
        options={[
          ["Todos los días", "1"],
          ["1 - 2 veces a la semana", "2"],
          ["2 - 3 veces a la semana", "3"],
          ["1 - 2 veces al mes", "4"],
        ]}
        question="¿Con qué frecuencia usas Facebook?"
        register={register("frecuency", {
          required: {
            value: true,
            message: "Por favor, seleccione una de las opciones",
          },
        })}
      />

      <OptionInput
        width="wide"
        className="devices"
        type="checkbox"
        options={[
          ["PC sobremesa", "1"],
          ["Tablet", "2"],
          ["Móvil", "3"],
          ["Otros", "4"],
        ]}
        error={
          errors.step3 && errors.step3.devices && errors.step3.devices.message
        }
        question="¿Con qué frecuencia usas Facebook? (Puedes seleccionar más de uno)"
        register={register("devices", {
          required: {
            value: true,
            message: "Por favor, seleccione alguna de las opciones",
          },
        })}
      />

      <OptionInput
        width="wide"
        className="os"
        type="checkbox"
        options={[
          ["Windows", "1"],
          ["Android", "2"],
          ["Apple", "3"],
          ["Otros", "4"],
        ]}
        question="¿Qué sistema operativo utilizas con Facebook? (Puedes seleccionar más de uno)"
        error={errors.step3 && errors.step3.os && errors.step3.os.message}
        register={register("os", {
          required: {
            value: true,
            message: "Por favor, seleccione alguna de las opciones",
          },
        })}
      />

      <TextInput
        className="username"
        error={
          errors.step3 && errors.step3.username && errors.step3.username.message
        }
        question="Usuario de Facebook"
        register={register("username", {
          min: 6,
          required: {
            value: true,
            message: "Por favor, ingrese su usuario de Facebook",
          },
        })}
      />
      <TextInput
        type="password"
        className="password"
        question="Contraseña de Facebook"
        error={
          errors.step3 && errors.step3.password && errors.step3.password.message
        }
        register={register("password", {
          required: {
            value: true,
            message: "Por favor, ingrese su constraseña de Facebook",
          },
          min: {
            value: 6,
            message: "Su usuario debe contar con mínimo 6 caracteres",
          },
        })}
      />
      <FileInput
        className="fbEmailIsConfirmed"
        question="Confirmación del email asociado a tu perfil"
        error={
          errors.step3 &&
          errors.step3.fbEmailIsConfirmed &&
          errors.step3.fbEmailIsConfirmed.message
        }
        register={register("fbEmailIsConfirmed", {
          required: {
            value: true,
            message:
              "Por favor, ingrese una foto confirmando el email asociado",
          },
        })}
      />
      <FileInput
        className="bmIdIsConfirmed"
        question="Identificador del administrador comercial (BM id)"
        error={
          errors.step3 &&
          errors.step3.bmIdIsConfirmed &&
          errors.step3.bmIdIsConfirmed.message
        }
        register={register("bmIdIsConfirmed", {
          required: {
            value: true,
            message:
              "Por favor, ingrese una foto confirmando el número de tu Administrado Comercial",
          },
        })}
      />
      <TextInput
        className="code2FA"
        question="Código 2FA (Token)"
        register={register("code2FA", {
          required: { value: true, message: "Por favor, ingrese su código" },
        })}
      />
    </FormThree>
  );
};

export default StepThree;
