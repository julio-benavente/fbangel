import React, { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";

// Components
import TextInput from "../TextInput";

// Styles
import { FormTwo } from "../../../styles/JoinUsPageStyles";
import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";

const StepTwo = ({
  country,
  setCountry,
  region,
  setRegion,
  phone,
  setPhone,
  date,
  setDate,
}) => {
  const methods = useFormContext();
  const {
    register,
    control,
    trigger,
    formState: { errors },
  } = methods;

  return (
    <FormTwo>
      <TextInput
        className="name"
        question="Tu nombre"
        register={register("stepTwo.name", {
          required: {
            value: true,
            message: "Por favor, registre su nombre",
          },
          pattern: {
            value: /^[ a-zA-Z\-\’]+$/,
            message: "El nombre contiene caracteres no permitidos",
          },
        })}
        error={
          errors.stepTwo && errors.stepTwo.name && errors.stepTwo.name.message
        }
      />

      <TextInput
        className="lastname"
        question="Tus apellidos"
        register={register("stepTwo.lastname", {
          required: {
            value: true,
            message: "Por favor, registre su apellido",
          },
          pattern: {
            value: /^[ a-zA-Z\-\’]+$/,
            message: "El apellido contiene caracteres no permitidos",
          },
        })}
        error={
          errors.stepTwo &&
          errors.stepTwo.lastname &&
          errors.stepTwo.lastname.message
        }
      />

      <TextInput
        className="countryDropdown"
        question="Tu país de residencia"
        error={
          errors.stepTwo &&
          errors.stepTwo.country &&
          errors.stepTwo.country.message
        }
        component={
          <Controller
            name="stepTwo.country"
            defaultValue=""
            control={control}
            rules={{
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            }}
            render={({ name, field: { onChange, onBlur } }) => {
              return (
                <CountryDropdown
                  name={name}
                  value={country}
                  onChange={(countryName) => {
                    setCountry(countryName);
                    onChange(countryName);
                  }}
                  onBlur={() => trigger("stepTwo.country")}
                />
              );
            }}
          />
        }
      />

      <TextInput
        question="Tu ciudad de residencia"
        className="regionDropdown"
        error={
          errors.stepTwo && errors.stepTwo.city && errors.stepTwo.city.message
        }
        component={
          <Controller
            control={control}
            name="stepTwo.city"
            rules={{
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
            }}
            defaultValue=""
            render={({ name, field: { onChange, onBlur } }) => {
              return (
                <RegionDropdown
                  name={name}
                  country={country}
                  value={region}
                  onChange={(regionName) => {
                    setRegion(regionName);
                    onChange(regionName);
                  }}
                  onBlur={() => trigger("stepTwo.city")}
                />
              );
            }}
          />
        }
      />

      <TextInput
        className="birthday"
        question="Fecha de nacimiento"
        error={
          errors.stepTwo &&
          errors.stepTwo.birthday &&
          errors.stepTwo.birthday.message
        }
        component={
          <Controller
            control={control}
            name="stepTwo.birthday"
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Por favor, ingrese la fecha de su nacimiento",
              },
              validate: {
                isNotOldEnough: (v) => {
                  function getAge(dob) {
                    var diff_ms = Date.now() - dob.getTime();
                    var age_dt = new Date(diff_ms);

                    return Math.abs(age_dt.getUTCFullYear() - 1970);
                  }

                  const age = getAge(v);
                  if (!(age >= 18)) {
                    return "Debes ser mayor de 18 años";
                  }
                  return true;
                },
              },
            }}
            render={({ name, field: { onChange, onBlur } }) => {
              return (
                <DatePicker
                  name={name}
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                    onChange(date);
                  }}
                  onBlur={() => trigger("stepTwo.birthday")}
                />
              );
            }}
          />
        }
      />

      <TextInput
        className="phone"
        question="Tu celular"
        error={
          errors.stepTwo && errors.stepTwo.phone && errors.stepTwo.phone.message
        }
        component={
          <Controller
            name="stepTwo.phone"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Este campo es obligatorio",
              },
              pattern: {
                value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                message: "Ingrese un numero de celular válido",
              },
            }}
            render={({ name, field: { onChange, onBlur } }) => {
              return (
                <PhoneInput
                  name={name}
                  country={"pe"}
                  value={phone}
                  countryCodeEditable={false}
                  onChange={(phone) => {
                    setPhone(phone);
                    onChange(phone);
                  }}
                  onBlur={() => trigger("stepTwo.phone")}
                />
              );
            }}
          />
        }
      />

      <TextInput
        className="email"
        question="Email"
        error={
          errors.stepTwo && errors.stepTwo.email && errors.stepTwo.email.message
        }
        register={register("stepTwo.email", {
          required: {
            value: true,
            message: "Por favor, ingrese su email",
          },
          pattern: {
            value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            message: "Ingrese un email valido",
          },
        })}
      />
    </FormTwo>
  );
};

export default StepTwo;
