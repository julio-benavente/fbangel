import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";

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
  const [formLevel, setFormLevel] = useState(1);
  const {
    register,
    handleSubmit,
    control,
    // watch,
    // formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    console.log("datos", data);
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
              {formLevel == 1 && (
                <FormOne>
                  <Radio
                    options={[
                      ["Sí", "si"],
                      ["No", "no"],
                    ]}
                    question="¿Eres mayor de edad?"
                    register={register("age")}
                    control={control}
                  />
                </FormOne>
              )}
              {formLevel == 2 && <FormTwo></FormTwo>}
              {formLevel == 3 && <FormThree></FormThree>}
              {formLevel == 4 && <FormFour></FormFour>}
              {formLevel == 5 && <FormFive></FormFive>}
              <input type="submit" />
            </Forms>
          </FormsWrapper>
          <JoinUsImage />
        </JoinUsSectionWrapper>
      </JoinUsSection>
    </JoinUs>
  );
};

export default JoinUsPage;

const Radio = ({ options, question, register, resgisterOpt }) => {
  const [checked, setChecked] = useState();

  const handleSelection = (e) => {
    const value = e.target.getAttribute("value");
    setChecked(value);
  };

  const type = "checkbox";
  return (
    <InputWraper>
      <Question>
        {question} <span>*</span>
      </Question>

      {options.map((option) => {
        return (
          <Option>
            <input
              style={{ opacity: 0 }}
              type={type}
              value={option[1]}
              {...register}
              onChange={(e) => handleSelection(e)}
            />

            {option[0]}
            <span
              className={`box ${type}`}
              data-check={checked == option[1]}
            ></span>
          </Option>
        );
      })}
    </InputWraper>
  );
};
