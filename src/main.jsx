import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/Context-app.jsx";
import Cardapio from './pages/Cardapio';
import Single from './pages/Single';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App />
      </ContextProvider>
    ),
  },
  {
    path: "/Cardapio",
    element: (
      <ContextProvider>
        <Cardapio />
      </ContextProvider>
    ),
  },
   {
    path: "/Single",
    element: (
      <ContextProvider>
        <Single />
      </ContextProvider>
    ),
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
