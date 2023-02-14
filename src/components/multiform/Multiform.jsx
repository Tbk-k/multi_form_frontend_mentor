import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { formContent } from "../../assets/formContent";
import Sidebar from "../sidebar/Sidebar";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import { Wrapper } from "./Multiform.styles";

const Multiforms = () => {
  let { pathname } = useLocation();
  const [step, setStep] = useState(pathname[1] - 1);
  useEffect(() => {
    setStep(pathname[1] - 1);
  }, [pathname]);

  return (
    <Wrapper>
      <Sidebar />
      <SubscriptionForm {...formContent[step]} />
    </Wrapper>
  );
};

export default Multiforms;
