import React from "react";
import { StyledLabel } from "./Plan.styles";

const PlanInputs = ({ icon, bill, discount, ...props }) => {
  return (
    <>
      <StyledLabel htmlFor={props.id}>
        <input {...props} />
        {icon}
        <div>
          <h4>{props.value}</h4>
          <p>
            {discount
              ? `$${bill.yr}/yr`
              : `
            $${bill.mo}/mo`}
          </p>
          {discount && <span>2 months free</span>}
        </div>
      </StyledLabel>
    </>
  );
};

export default PlanInputs;
