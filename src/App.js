import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Multiform from "../src/components/multiform/Multiform";

const router = createBrowserRouter([
  { path: "/", element: <Multiform /> },
  { path: "/1", element: <Multiform /> },
  { path: "/2", element: <Multiform /> },
  { path: "/3", element: <Multiform /> },
  { path: "/4", element: <Multiform /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
