import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// Импортируем страницы с `webpackPrefetch`
const Home = lazy(() => import(/* webpackPrefetch: true */ "./pages/home"));
const About = lazy(() => import(/* webpackPrefetch: true */ "./pages/about"));
const B2b = lazy(() => import(/* webpackPrefetch: true */ "./pages/b2b"));
const BecomeSponsor = lazy(
  () => import(/* webpackPrefetch: true */ "./pages/become-sponsor")
);
const StendForm = lazy(
  () => import(/* webpackPrefetch: true */ "./pages/stend-form")
);
const Contacts = lazy(
  () => import(/* webpackPrefetch: true */ "./pages/contacts")
);

// Настраиваем маршруты
const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Home />, path: "" },
      { element: <About />, path: "/about" },
      { element: <B2b />, path: "/B2B-B2G" },
      { element: <BecomeSponsor />, path: "/become-sponsor" },
      { element: <StendForm />, path: "/stend-form" },
      { element: <Contacts />, path: "/contacts" },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
