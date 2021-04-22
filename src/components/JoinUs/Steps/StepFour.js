import React from "react";
import { useFormContext } from "react-hook-form";

// Components
import OptionInput from "../OptionInput";
import TextInput from "../TextInput";

// Styles
import { FormFour } from "../../../styles/JoinUsPageStyles";

const StepFour = () => {
  const methods = useFormContext();

  const {
    register,
    control,
    formState: { errors },
  } = methods;

  return (
    <FormFour>
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
  );
};

export default StepFour;
