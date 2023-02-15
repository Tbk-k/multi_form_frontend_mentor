import React, { useState } from "react";
import { StyledLabel } from "./AddOns.styles";

const AddOns = ({ description, price, discount, ...props }) => {
  const [isChecked, setIsChacked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChacked((prev) => !prev);
  };

  return (
    <StyledLabel htmlFor={props.id} isChecked={isChecked}>
      <div>
        <input {...props} checked={isChecked} onChange={handleCheckboxChange} />
        <div>
          <h4>{props.value}</h4>
          <p>{description}</p>
        </div>
      </div>
      <span>{discount ? `+$${price.yr}/yr` : `+$${price.mo}/mo`}</span>
    </StyledLabel>
  );
};

export default AddOns;
