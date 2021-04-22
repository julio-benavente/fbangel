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
          errors.stepThree &&
          errors.stepThree.frecuency &&
          errors.stepThree.frecuency.message
        }
        options={[
          ["Todos los días", "1"],
          ["1 - 2 veces a la semana", "2"],
          ["2 - 3 veces a la semana", "3"],
          ["1 - 2 veces al mes", "4"],
        ]}
        question="¿Con qué frecuencia usas Facebook?"
        register={register("stepThree.frecuency", {
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
          errors.stepThree &&
          errors.stepThree.devices &&
          errors.stepThree.devices.message
        }
        question="¿Con qué frecuencia usas Facebook? (Puedes seleccionar más de uno)"
        register={register("stepThree.devices", {
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
        error={
          errors.stepThree && errors.stepThree.os && errors.stepThree.os.message
        }
        register={register("stepThree.os", {
          required: {
            value: true,
            message: "Por favor, seleccione alguna de las opciones",
          },
        })}
      />

      <TextInput
        className="username"
        error={
          errors.stepThree &&
          errors.stepThree.username &&
          errors.stepThree.username.message
        }
        question="Usuario de Facebook"
        register={register("stepThree.username", {
          required: {
            value: true,
            message: "Por favor, ingrese su usuario de Facebook",
          },
          validate: {
            min: (v) =>
              v.length < 6
                ? "El usuario debe contener al menos 6 caracteres"
                : true,
          },
        })}
      />
      <TextInput
        type="password"
        className="password"
        question="Contraseña de Facebook"
        error={
          errors.stepThree &&
          errors.stepThree.password &&
          errors.stepThree.password.message
        }
        register={register("stepThree.password", {
          required: {
            value: true,
            message: "Por favor, ingrese su constraseña de Facebook",
          },
          validate: {
            min: (v) =>
              v.length < 6
                ? "Su contraseña debe contener al menos 6 caracteres"
                : true,
          },
        })}
      />
      <FileInput
        className="fbEmailIsConfirmed"
        question="Confirmación del email asociado a tu perfil"
        error={
          errors.stepThree &&
          errors.stepThree.fbEmailIsConfirmed &&
          errors.stepThree.fbEmailIsConfirmed.message
        }
        register={register("stepThree.fbEmailIsConfirmed", {
          required: {
            value: true,
            message:
              "Por favor, ingrese una foto confirmando el email asociado",
          },
          validate: {
            size: (v) =>
              v[0].size > 2000000 ? "El archivo puede pesar máximo 2mb" : true,
            type: (v) =>
              !["image/jpeg", "image/jpg", "image/png"].includes(v[0].type)
                ? "El archivo solo puede tener formato PNG, JPG o JPEG"
                : true,
          },
        })}
      />
      <FileInput
        className="bmIdIsConfirmed"
        question="Identificador del administrador comercial (BM id)"
        error={
          errors.stepThree &&
          errors.stepThree.bmIdIsConfirmed &&
          errors.stepThree.bmIdIsConfirmed.message
        }
        register={register("stepThree.bmIdIsConfirmed", {
          required: {
            value: true,
            message:
              "Por favor, ingrese una foto confirmando el número de tu Administrado Comercial",
          },
          validate: {
            size: (v) =>
              v[0].size > 2000000 ? "El archivo puede pesar máximo 2mb" : true,
            type: (v) =>
              !["image/jpeg", "image/jpg", "image/png"].includes(v[0].type)
                ? "El archivo solo puede tener formato PNG, JPG o JPEG"
                : true,
          },
        })}
      />
      <TextInput
        className="code2FA"
        question="Código 2FA (Token)"
        error={
          errors.stepThree &&
          errors.stepThree.code2FA &&
          errors.stepThree.code2FA.message
        }
        register={register("stepThree.code2FA", {
          required: { value: true, message: "Por favor, ingrese su código" },
          validate: {
            numCharacters: (v) =>
              v.length !== 32 ? "El códifo 2FA cuenta con 32 dígitos" : true,
          },
        })}
      />
    </FormThree>
  );
};

export default StepThree;
