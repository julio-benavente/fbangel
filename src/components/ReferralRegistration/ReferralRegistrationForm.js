import React, { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
// import StepThree from "./Steps/StepThree";
// import StepFour from "./Steps/StepFour";
// import StepFive from "./Steps/StepFive";

// Styles
import {
  FormsWrapper,
  FormLocation,
  Forms,
  Location,
  FormLocationTitle,
  Buttons,
  Button,
  SubmitButton,
} from "../../styles/ReferralRegistrationPageStyles";
import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [formStep, setFormStep] = useState(1);
  const formData = useRef();
  const methods = useForm({
    mode: "all",
  });
  const history = useHistory();

  const {
    handleSubmit,
    trigger,
    getValues,
    watch,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = async (data) => {};

  // Step two state
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState(null);
  const [date, setDate] = useState(null);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return (
          <StepOne
            country={country}
            setCountry={setCountry}
            region={region}
            setRegion={setRegion}
            phone={phone}
            setPhone={setPhone}
            date={date}
            setDate={setDate}
          />
        );
      case 2:
        return <StepTwo />;
      default:
        return "No more steps";
    }
  };

  //
  const handleFormStep = async (direction, formStep) => {
    const steps = ["stepOne", "stepTwo", "stepThree", "stepFour", "stepFive"];
    var step = steps[formStep - 1];

    // Verify if the qualification form is positive
    const qualificationVerification = async () => {
      await trigger();

      if ((formStep === 1) & !errors.stepOne) {
        const values = Object.values(getValues("stepOne"));
        const valuesToCompare = ["yes", "yes", "no", "yes", "yes"];
        const some = values.some((value, i) => value !== valuesToCompare[i]);

        if (some) history.push("/no-valid");
      }
    };

    await qualificationVerification();

    // Validate if isValid the step
    if (direction === 1) {
      const fieldsToValidate = Object.keys(getValues(step)).map(
        (value) => `${step}.${value}`
      );

      await trigger(fieldsToValidate);

      // next
      !errors[step] && setFormStep(formStep + direction);
    }

    // previous
    direction === -1 && setFormStep(formStep + direction);
  };

  const renderButton = () => {
    const submitPage = 4;
    switch (true) {
      case formStep > submitPage:
        return null;
      case formStep == submitPage:
        return (
          <Buttons>
            <Button onClick={() => handleFormStep(-1, formStep)}>
              Anterior
            </Button>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </Buttons>
        );

      case formStep < submitPage && 1 < formStep:
        return (
          <Buttons>
            <Buttons>
              <Button onClick={() => handleFormStep(-1, formStep)}>
                Anterior
              </Button>
            </Buttons>

            <Button onClick={() => handleFormStep(1, formStep)}>
              Siguiente
            </Button>
          </Buttons>
        );

      case formStep === 1:
        return (
          <Buttons one>
            <Button onClick={() => handleFormStep(1, formStep)}>
              Siguiente
            </Button>
          </Buttons>
        );
      default:
        return null;
    }
  };
  return (
    <FormsWrapper>
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
          <p className="location">Confirmación y Método de pago</p>
        </Location>
        {formStep === 5 && (
          <Location className={`${formStep === 5 && "active"}`}>
            <p className="number">5</p>
            <p className="location">Felicitaciones</p>
          </Location>
        )}
      </FormLocation>
      <FormProvider {...methods}>
        <Forms onSubmit={handleSubmit(onSubmit)} ref={formData}>
          {showStep(formStep)}
          {renderButton()}
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </Forms>
      </FormProvider>
    </FormsWrapper>
  );
};

export default Form;
