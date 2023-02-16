import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Formnav.styles";

const Formnav = ({ step }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (step <= 0) return;
    let url = `/${parseInt(step - 1)}`;
    navigate(url);
  };
  return (
    <Wrapper step={step}>
      {step > 1 && (
        <button className="back" onClick={handleBack}>
          Go Back
        </button>
      )}
      <button type="submit" form="form" className="next">
        {step == 4 ? "Confirm" : "Next Step"}
      </button>
    </Wrapper>
  );
};

export default Formnav;
