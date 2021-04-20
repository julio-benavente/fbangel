import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

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
  Button,
} from "../../styles/JoinUsPageStyles";

const JoinUsPage = () => {
  const [formStep, setFormStep] = useState(4);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const values = getValues();

  const onSubmit = (data) => {
    console.log("datos", data);
  };

  const onClickSubmit = (e) => {
    console.log(values);
    // console.log(watch);
  };

  const completeFormStep = async () => {
    const res = await trigger();
    errors.form1 && console.log(errors.form1);

    console.log(res);
    setFormStep(formStep + 1);
  };

  const renderButton = () => {
    const submitPage = 4;
    switch (true) {
      case formStep > submitPage:
        return null;
      case formStep == submitPage:
        return (
          <Button disabled={!isValid} type="submit">
            Enviar
          </Button>
        );
      case formStep < submitPage:
        return (
          <Button
            //
            disabled={!isValid}
            //
            type="submit"
            onClick={completeFormStep}
          >
            Siguiente
          </Button>
        );
      default:
        return null;
    }
  };

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
              <Location className={`${formStep == 1 && "active"}`}>
                <p className="number">1</p>
                <p className="location">Cuestionario de calificación</p>
              </Location>
              <Location className={`${formStep == 2 && "active"}`}>
                <p className="number">2</p>
                <p className="location">Datos personales</p>
              </Location>
              <Location className={`${formStep == 3 && "active"}`}>
                <p className="number">3</p>
                <p className="location">Datos de cuenta de Facebook</p>
              </Location>
              <Location className={`${formStep == 4 && "active"}`}>
                <p className="number">4</p>
                <p className="location">Confirmación</p>
              </Location>
              {formStep == 5 && (
                <Location className={`${formStep == 5 && "active"}`}>
                  <p className="number">5</p>
                  <p className="location">Felicitaciones</p>
                </Location>
              )}
            </FormLocation>
            <Forms>
              {formStep == 1 && (
                <FormOne step={formStep}>
                  <OptionInput
                    short="short"
                    className="isAdult"
                    type="radio"
                    options={[
                      ["Sí", "si"],
                      ["No", "no"],
                    ]}
                    question="¿Eres mayor de edad?"
                    register={register("isAdult", {
                      required: true,
                      message: "Este campo es obligatorio",
                    })}
                  />
                  <OptionInput
                    short="short"
                    className="accountIsReal"
                    type="radio"
                    options={[
                      ["Sí", "si"],
                      ["No", "no"],
                    ]}
                    question="¿Estás creando la solicitud con tu perfil real de Facebook?"
                    register={register("accountIsReal", {
                      required: true,
                      message: "Este campo es obligatorio",
                    })}
                  />

                  <OptionInput
                    short="short"
                    className="isFirstTime"
                    type="radio"
                    options={[
                      ["Sí", "si"],
                      ["No", "no"],
                    ]}
                    question="¿Tú o alguien más ha utilizado tu cuenta antes para crear publicidad?"
                    register={register("isFirstTime", {
                      required: true,
                      message: "Este campo es obligatorio",
                    })}
                  />
                  <OptionInput
                    short="short"
                    className="isOneYear"
                    type="radio"
                    options={[
                      ["Sí", "si"],
                      ["No", "no"],
                    ]}
                    question="¿Tu cuenta tiene más de un año?"
                    register={register("isOneYear", {
                      required: true,
                      message: "Este campo es obligatorio",
                    })}
                  />
                  <OptionInput
                    short="short"
                    className="haveFriends"
                    type="radio"
                    options={[
                      ["Sí", "si"],
                      ["No", "no"],
                    ]}
                    question="¿Tienes más de 100 amigos en Facebook?"
                    register={register("haveFriends", {
                      required: true,
                      message: "Este campo es obligatorio",
                    })}
                  />
                </FormOne>
              )}
              {formStep == 2 && (
                <FormTwo step={formStep}>
                  <TextInput
                    className="name"
                    question="Tu nombre"
                    register={register("name", {
                      required: true,
                      message: "Por favor, ingrese su nombre",
                    })}
                  />

                  <TextInput
                    className="lastname"
                    question="Tus apellidos"
                    register={register("lastname", {
                      required: true,
                      message: "Por favor, ingrese sus apellidos",
                    })}
                  />

                  <TextInput
                    className="country"
                    question="País de residencia"
                    register={register("country", {
                      required: true,
                      message: "Por favor, ingrese su país de residencia",
                    })}
                  />

                  <TextInput
                    className="city"
                    question="Su ciudad de residencia"
                    register={register("city", {
                      required: true,
                      message: "Por favor, ingrese su ciudad de residencia ",
                    })}
                  />

                  <TextInput
                    className="birthday"
                    question="Fecha de nacimiento"
                    register={register("birthday", {
                      required: true,
                      message: "Por favor, ingrese la fecha de su nacimiento",
                    })}
                  />

                  <TextInput
                    className="phone"
                    question="Tu celular"
                    register={register("phone", {
                      required: true,
                      message: "Por favor, ingrese el número de su celular",
                    })}
                  />
                  <TextInput
                    className="email"
                    question="Email"
                    register={register("email", {
                      required: true,
                      message: "Por favor, ingrese su email",
                    })}
                  />
                </FormTwo>
              )}
              {formStep == 3 && (
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
              {formStep == 4 && (
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
              {formStep == 5 && <FormFive step={formStep}></FormFive>}
              {renderButton()}

              {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
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

const TextInput = ({ type, className, register, question }) => {
  return (
    <InputWraper className={className}>
      <Question>
        {question} <span>*</span>
      </Question>
      <input type={type ? type : "text"} {...register} />
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
