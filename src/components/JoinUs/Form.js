import React, { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

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
  SubmitButton,
} from "../../styles/JoinUsPageStyles";
import "react-phone-input-2/lib/style.css";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [formStep, setFormStep] = useState(4);
  const formData = useRef();
  const defaultValues = {
    stepOne: {
      isAdult: "yes",
      accountIsReal: "yes",
      isFirstTime: "no",
      isOneYear: "yes",
      haveFriends: "yes",
    },
    stepTwo: {
      name: "julio",
      lastname: "julio",
      email: "julio@julio.com",
      country: "Peru",
      city: "Lima",
      // birthday: "1982-10-06T05:00:00.000Z",
      phone: "51934988135",
    },
    stepThree: {
      frecuency: "2-3_a_week",
      devices: ["tablet", "movil"],
      os: ["windows", "other"],
      username: "julio@julio.com",
      password: "julio1234",
      code2FA: "43211234432112344321123443211234",
    },
    stepFour: {
      paymentMethod: "paypal",
      paypalEmail: "julio@julio.com",
      paypalEmailConfirmation: "julio@julio.com",
      referral: "",
      termsAndConditions: "yes",
      gdprAgreement: "yes",
    },
  };
  const methods = useForm({
    mode: "all",
    defaultValues,
  });
  const history = useHistory();

  const {
    handleSubmit,
    trigger,
    getValues,
    watch,
    formState: { errors, isValid },
  } = methods;

  const onSubmit = async (data) => {
    const response = await fetchCandidateInformation(data);
    const { status } = response;

    // if (status !== 200) {
    // handleFormStep(1, formStep);
    // } else {
    const incompleteCandidate = await fetchIncompleteCandidateInformation(data);
    console.log(incompleteCandidate);
    // }

    return null;
  };

  const fetchCandidateInformation = async (data) => {
    const { stepOne, stepTwo, stepThree, stepFour } = data;
    const candidateInformation = {
      ...stepOne,
      ...stepTwo,
      ...stepThree,
      ...stepFour,
    };

    try {
      const response = await axios.post("/api/candidates/registration", {
        ...candidateInformation,
      });

      return response;
    } catch ({ response }) {
      return response;
    }
  };

  // const testImage = async (data) => {
  //   try {
  //     const response = await axios.post("https://httpbin.org/anything", form);
  //     return response;
  //   } catch (error) {
  //     console.log("error:", { error });
  //     return error;
  //   }
  // };

  const fetchIncompleteCandidateInformation = async (data) => {
    const { stepOne, stepTwo, stepThree, stepFour } = data;
    const { fbEmailIsConfirmed } = stepThree;
    const { bmIdIsConfirmed } = stepThree;
    const { documentationProved } = stepFour;

    const encodeImage = (img) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(documentationProved[0]);
        reader.onloadend = (e) => resolve(e.target.result);

        // Error
        reader.onerror = (error) => reject(error);
      });
    };

    const candidateInformation = {
      ...stepOne,
      ...stepTwo,
      ...stepThree,
      ...stepFour,
      // fbEmailIsConfirmed: fbEmailIsConfirmed[0],
      // bmIdIsConfirmed: bmIdIsConfirmed[0],
      documentationProved: await encodeImage(documentationProved[0]),
    };

    // Images

    // const form = new FormData();

    // Object.entries(candidateInformation).map((entry) => {
    //   form.append(entry[0], entry[1]);
    // });

    // form.set("fbEmailIsConfirmed", fbEmailIsConfirmed[0]);
    // form.set("bmIdIsConfirmed", bmIdIsConfirmed[0]);
    // form.set("documentationProved", documentationProved[0]);

    // form.set("fbEmailIsConfirmed", documentationProved[0]);
    // form.set("bmIdIsConfirmed", documentationProved[0]);
    // form.set("documentationProved", documentationProved[0]);

    try {
      const response = await axios.post(
        "/api/incompleteCandidates/registration",
        candidateInformation
      );
      return response;
    } catch ({ response }) {
      return response;
    }
  };

  // Step two state
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState(null);
  const [date, setDate] = useState(null);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return (
          <StepTwo
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
