import React, { useState } from "react";
import AddOns from "./inputs/AddOns";
import Personal from "./inputs/Personal";
import Plan from "./inputs/Plan";
import Summary from "./inputs/Summary";
import { StyledForm, BtnWrapper } from "./SubscriptionForm.styles";

const SubscriptionForm = ({ id, title, description, inputs, handleValid }) => {
  const [discount, setDiscount] = useState(false);
  const handleDiscount = () => {
    setDiscount((prev) => !prev);
  };

  let InputPattern;
  switch (id) {
    case 1:
      InputPattern = Personal;
      break;
    case 2:
      InputPattern = Plan;
      break;
    case 3:
      InputPattern = AddOns;
      break;
    case 4:
      InputPattern = Summary;
      break;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValid();
  };

  return (
    <StyledForm onSubmit={handleSubmit} id="form">
      <legend>
        <h3>{title}</h3>
        <p>{description} </p>
        {inputs.map(({ ...props }) => (
          <InputPattern key={props.id} {...props} discount={discount} />
        ))}
      </legend>
      {id == 2 && (
        <BtnWrapper discount={discount}>
          <p>Monthly</p>
          <button type="button" onClick={handleDiscount} />
          <p>Yearly</p>
        </BtnWrapper>
      )}
    </StyledForm>
  );
};

export default SubscriptionForm;
