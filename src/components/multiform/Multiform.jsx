import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formContent } from "../../assets/formContent";
import Sidebar from "../sidebar/Sidebar";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import { InnerWrapper, Wrapper } from "./Multiform.styles";
import Formnav from "../formnav/Formnav";

const Multiforms = () => {
  let { pathname } = useLocation();
  const [step, setStep] = useState(pathname[1]);
  const [isValid, setValid] = useState(false);

  const handleValid = () => {
    setValid((prev) => !prev);
  };

  useEffect(() => {
    setStep(pathname[1]);
  }, [pathname]);
  return (
    <Wrapper>
      <Sidebar />
      <InnerWrapper>
        <SubscriptionForm
          {...formContent[step - 1]}
          handleValid={handleValid}
          step={step}
        />
        <Formnav step={step} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Multiforms;
