import React from "react";
import { useForm, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

// Components
import FileInput from "../FileInput";
import OptionInput from "../OptionInput";
import TextInput from "../TextInput";

// Assets
import businessManagerImageOne from "../../../assets/images/businessManagerImageOne.jpg";
import businessManagerImageTwo from "../../../assets/images/businessManagerImageTwo.jpg";
import facebookEmailConfirmationImageOne from "../../../assets/images/facebookEmailConfirmationImageOne.jpg";
import facebookEmailConfirmationImageTwo from "../../../assets/images/facebookEmailConfirmationImageTwo.jpg";

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
          ["Todos los días", "everyday"],
          ["2 - 3 veces a la semana", "1-2_a_week"],
          ["1 - 2 veces a la semana", "2-3_a_week"],
          ["1 - 2 veces al mes", "1-2_a_month"],
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
          ["PC sobremesa", "pc"],
          ["Tablet", "tablet"],
          ["Móvil", "movil"],
          ["Otros", "other"],
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
          ["Windows", "windows"],
          ["Android", "android"],
          ["Apple", "apple"],
          ["Otros", "other"],
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
        className="fbEmailImage"
        question="Confirmación del email asociado a tu perfil"
        error={
          errors.stepThree &&
          errors.stepThree.fbEmailImage &&
          errors.stepThree.fbEmailImage.message
        }
        register={register("stepThree.fbEmailImage", {
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
      <div className="message">
        <p>
          Envía una foto para confirmar el email asociado.{" "}
          <a href={facebookEmailConfirmationImageOne} target="_blank">
            Ejemplo 1 desde ordenador
          </a>{" "}
          <a href={facebookEmailConfirmationImageTwo} target="_blank">
            Ejemplo 2 desde móvil
          </a>
        </p>
        <p>
          <b>Móvil:</b> Configuración &gt; Configuración de la cuenta &gt;
          Información personal &gt; Información de contacto
        </p>
        <p>
          <b>Ordenador:</b> Configuración y privacidad &gt; Configuración &gt;
          General &gt; Contacto
        </p>
        <p>
          O ve a :{" "}
          <a href="https://www.facebook.com/settings" target="_blank">
            https://www.facebook.com/settings
          </a>
        </p>
      </div>

      <FileInput
        className="bmIdImage"
        question="Identificador del administrador comercial (BM id)"
        error={
          errors.stepThree &&
          errors.stepThree.bmIdImage &&
          errors.stepThree.bmIdImage.message
        }
        register={register("stepThree.bmIdImage", {
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
      <div className="message">
        <p>
          Envía una foto del número de tu Administrador Comercial.{" "}
          <a href={businessManagerImageOne} target="_blank">
            Ejemplo 1 desde ordenador
          </a>{" "}
          <a href={businessManagerImageTwo} target="_blank">
            Ejemplo 2 desde móvil
          </a>
        </p>
      </div>

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
      <div className="message">
        <p>
          Si no sabes tu código usa esta dirección{" "}
          <a
            href="https://www.facebook.com/security/2fac/setup/intro"
            target="_blank"
          >
            https://www.facebook.com/security/2fac/setup/intro
          </a>{" "}
          y haz clic en el botón azul que dice "Usar app de autenticación" copia
          el código de 32 caracteres y pegalo aquí. O ve al Paso 2 de nuestra
          sección{" "}
          <Link to="/como-funciona" target="_blank">
            Como funciona
          </Link>{" "}
          y consulta los videos.
        </p>
      </div>
    </FormThree>
  );
};

export default StepThree;
