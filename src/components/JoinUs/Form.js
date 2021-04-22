import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

// Components
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StepFive from "./Steps/StepFive";

// Styles
import {
  FormsWrapper,
  FormLocation,
  Forms,
  Location,
  FormLocationTitle,
  Buttons,
  Button,
} from "../../styles/JoinUsPageStyles";
import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [formStep, setFormStep] = useState(3);
  const methods = useForm({ mode: "all" });

  const {
    register,
    handleSubmit,
    watch,
    control,
    trigger,
    getValues,
    clearErrors,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = (data) => {
    console.log("datos", data);
    handleFormStep();
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      default:
        return "No more steps";
    }
  };

  const handleFormStep = async (direction, formStep) => {
    const steps = ["stepOne", "stepTwo", "stepThree", "stepFour", "stepFive"];
    var step = steps[formStep - 1];

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
            <Button onClick={() => handleFormStep(1, formStep)}>Enviar</Button>
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
          <p className="location">Método de pago y Confirmación</p>
        </Location>
        {formStep === 5 && (
          <Location className={`${formStep === 5 && "active"}`}>
            <p className="number">5</p>
            <p className="location">Felicitaciones</p>
          </Location>
        )}
      </FormLocation>
      <FormProvider {...methods}>
        <Forms
          onSubmit={handleSubmit(onSubmit, (e) => console.log("onerror", e))}
        >
          {showStep(formStep)}
          {renderButton()}
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </Forms>
      </FormProvider>
    </FormsWrapper>
  );
};

export default Form;
