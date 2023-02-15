import React from "react";
import { NavLink } from "react-router-dom";
import { Additional, Total, Wrapper } from "./Summary.styles";

const Summary = ({ discount }) => {
  return (
    <>
      <Wrapper>
        <h4>Arcade (Monthly)</h4>
        <div>
          <NavLink to="/2">Change</NavLink>
          <span>$9/mo</span>
        </div>
        <hr />
        <Additional>
          <div>
            <p>Online service</p>
            <p>+$1/mo</p>
          </div>
          <div>
            <p>Larger storage</p>
            <p>+$2/mo</p>
          </div>
        </Additional>
      </Wrapper>
      <Total>
        <p>Total (per month)</p>
        <p>+$12/mo</p>
      </Total>
    </>
  );
};

export default Summary;
