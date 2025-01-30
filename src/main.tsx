import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, B2b, BecomeSponsor, Contacts, Home, StendForm } from "./pages";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <B2b />,
        path: "/B2B-B2G",
      },
      {
        element: <BecomeSponsor />,
        path: "/become-sponsor",
      },
      {
        element: <StendForm />,
        path: "/stend-form",
      },
      {
        element: <Contacts />,
        path: "/contacts",
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
