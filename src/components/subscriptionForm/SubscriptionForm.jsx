import React from "react";
import PersolInputs from "./inputs/PersolInputs";
import PlanInputs from "./inputs/PlanInputs";
import { StyledForm } from "./SubscriptionForm.styles";

const SubscriptionForm = ({ id, title, description, inputs }) => {
  let InputPattern;
  switch (id) {
    case 1:
      InputPattern = PersolInputs;
      break;
    case 2:
      InputPattern = PlanInputs;
      break;
  }

  return (
    <StyledForm>
      <legend>
        <h3>{title}</h3>
        <p>{description} </p>
        {inputs.map(({ ...props }) => (
          <InputPattern key={props.id} {...props} />
        ))}
      </legend>
    </StyledForm>
  );
};

export default SubscriptionForm;
