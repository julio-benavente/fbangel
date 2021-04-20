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
} from "../../styles/JoinUsPageStyles";

const JoinUsPage = () => {
  const [formStep, setFormStep] = useState(2);
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
    switch (true) {
      case formStep > 5:
        return null;
      case formStep == 5:
        return (
          <button disabled={!isValid} type="submit">
            Send
          </button>
        );
      case formStep < 5:
        return (
          <button
            //
            disabled={!isValid}
            //
            type="submit"
            onClick={completeFormStep}
          >
            Continue
          </button>
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
              <Location>
                <p className="number active">1</p>
                <p className="location">Cuestionario de calificación</p>
              </Location>
              <Location>
                <p className="number">1</p>
                <p className="location">Cuestionario de calificación</p>
              </Location>
              <Location>
                <p className="number">1</p>
                <p className="location">Cuestionario de calificación</p>
              </Location>
              <Location>
                <p className="number">1</p>
                <p className="location">Cuestionario de calificación</p>
              </Location>
              <Location>
                <p className="number">1</p>
                <p className="location">Cuestionario de calificación</p>
              </Location>
            </FormLocation>
            <Forms>
              {formStep == 1 && (
                <FormOne step={formStep}>
                  <OptionInput
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
                  <h1>Form 3</h1>
                </FormThree>
              )}
              {formStep == 4 && (
                <FormFour step={formStep}>
                  <h1>Form 4</h1>
                </FormFour>
              )}
              {formStep == 5 && (
                <FormFive step={formStep}>
                  <h1>Form 5</h1>
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
}) => {
  return (
    <InputWraper className={className}>
      <Question>
        {question} <span>*</span>
      </Question>

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
    </InputWraper>
  );
};

const TextInput = ({ className, register, question }) => {
  const [text, setText] = useState("");
  return (
    <InputWraper className={className}>
      <Question>
        {question} <span>*</span>
      </Question>
      <input type="text" {...register} />
    </InputWraper>
  );
};
