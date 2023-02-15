import React from "react";
import { StyledField } from "./Personal.styles";

const PersolInputs = ({ label, discount, ...props }) => {
  return (
    <StyledField>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </StyledField>
  );
};

export default PersolInputs;
