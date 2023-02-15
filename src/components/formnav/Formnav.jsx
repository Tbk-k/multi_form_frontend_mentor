import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./Formnav.styles";

const Formnav = ({ step, isValid, handleValid }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (!e.target.className || !isValid) return;
    let url = step;
    if (e.target.className == "next" && step < 5) {
      url++;
    } else if (step > 1) {
      url--;
    }
    handleValid();
    navigate(`/${url}`);
  };
  return (
    <Wrapper step={step} onClick={handleClick}>
      {step > 1 && <button className="back">Go Back</button>}
      <button type="submit" form="form" className="next">
        {step == 4 ? "Confirm" : "Next Step"}
      </button>
    </Wrapper>
  );
};

export default Formnav;
