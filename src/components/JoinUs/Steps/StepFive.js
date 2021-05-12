import React from "react";
import { useTranslation } from "react-i18next";

// Styles
import { FormFive } from "../../../styles/JoinUsPageStyles";

const StepFive = () => {
  const { t } = useTranslation();
  return (
    <FormFive>
      <p>{t("join_us.step_five.p_1")}</p>
      <p>{t("join_us.step_five.p_2")}</p>
    </FormFive>
  );
};

export default StepFive;
