import { ReactComponent as ArcadePlan } from "../assets/img/icon-arcade.svg";
import { ReactComponent as AdvancedPlan } from "../assets/img/icon-advanced.svg";
import { ReactComponent as ProPlan } from "../assets/img/icon-pro.svg";

export const formContent = [
  {
    id: 1,
    title: "Personal info",
    description: "Please provide your name, email, address and phone number.",
    inputs: [
      {
        id: 1.1,
        type: "text",
        label: "Name",
        placeholder: "e.g. Stephen King",
      },
      {
        id: 1.2,
        type: "email",
        label: "Email Address",
        placeholder: "e.g. stephenking@lorem.com",
      },
      {
        id: 1.3,
        type: "tel",
        label: "Phone Number",
        placeholder: "e.g. +1 234 567 890",
      },
    ],
  },
  {
    id: 2,
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
    inputs: [
      {
        id: 2.1,
        type: "radio",
        value: "Arcade",
        name: "plan",
        icon: <ArcadePlan />,
      },
      {
        id: 2.2,
        type: "radio",
        value: "Advanced",
        name: "plan",
        icon: <AdvancedPlan />,
      },
      {
        id: 2.3,
        type: "radio",
        value: "Pro",
        name: "plan",
        icon: <ProPlan />,
      },
    ],
  },
  {
    id: 3,
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    id: 4,
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
  },
];
