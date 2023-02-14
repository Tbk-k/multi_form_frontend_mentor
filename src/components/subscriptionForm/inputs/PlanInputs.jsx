import React from "react";
import { StyledLabel } from "./PlanInputs.styles";

const PlanInputs = ({ icon, ...props }) => {
  return (
    <StyledLabel htmlFor={props.id}>
      <input {...props} />
      {icon}
    </StyledLabel>
  );
};

export default PlanInputs;
