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
        required: true,
        autoComplete: "off",
      },
      {
        id: 1.2,
        type: "email",
        label: "Email Address",
        placeholder: "e.g. stephenking@lorem.com",
        required: true,
        autoComplete: "off",
      },
      {
        id: 1.3,
        type: "tel",
        label: "Phone Number",
        placeholder: "e.g. +1 234 567 890",
        required: true,
        autoComplete: "off",
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
        bill: {
          mo: 9,
          yr: 90,
        },
      },
      {
        id: 2.2,
        type: "radio",
        value: "Advanced",
        name: "plan",
        icon: <AdvancedPlan />,
        bill: {
          mo: 12,
          yr: 120,
        },
      },
      {
        id: 2.3,
        type: "radio",
        value: "Pro",
        name: "plan",
        icon: <ProPlan />,
        bill: {
          mo: 15,
          yr: 150,
        },
      },
    ],
  },
  {
    id: 3,
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    inputs: [
      {
        id: 3.1,
        type: "checkbox",
        value: "Online service",
        description: "Access to multiplayer games",
        price: { mo: 1, yr: 10 },
      },
      {
        id: 3.2,
        type: "checkbox",
        value: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: { mo: 2, yr: 20 },
      },
      {
        id: 3.3,
        type: "checkbox",
        value: "Customizable profile",
        description: "Custom theme on your profile",
        price: { mo: 2, yr: 20 },
      },
    ],
  },
  {
    id: 4,
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
    inputs: [{ id: 4.1 }],
  },
];
