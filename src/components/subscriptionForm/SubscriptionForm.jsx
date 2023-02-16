import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddOns from "./inputs/AddOns";
import Personal from "./inputs/Personal";
import Plan from "./inputs/Plan";
import Summary from "./inputs/Summary";
import {
  StyledForm,
  BtnWrapper,
  InnerWrapper,
} from "./SubscriptionForm.styles";

const SubscriptionForm = ({ ...props }) => {
  const { id, title, description, inputs, handleValid, step } = props;

  const [discount, setDiscount] = useState(false);

  const navigate = useNavigate();

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
    let url = `/${parseInt(step) + 1}`;
    navigate(url);
  };

  return (
    <StyledForm onSubmit={handleSubmit} id="form">
      <legend>
        <h3>{title}</h3>
        <p>{description} </p>
      </legend>
      <InnerWrapper step={step}>
        {inputs.map(({ ...props }) => (
          <InputPattern key={props.id} {...props} discount={discount} />
        ))}
      </InnerWrapper>
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
