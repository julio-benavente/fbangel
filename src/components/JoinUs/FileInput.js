import React from "react";

import { InputWraper, Question } from "../../styles/JoinUsPageStyles";

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

export default FileInput;
