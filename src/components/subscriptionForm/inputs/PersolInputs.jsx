import React from "react";
import { StyledField } from "./PersonalInputs.styles";

const PersolInputs = ({ label, ...props }) => {
  return (
    <StyledField>
      <label htmlFor={props.id}>{label}</label>
      <input {...props} />
    </StyledField>
  );
};

export default PersolInputs;
