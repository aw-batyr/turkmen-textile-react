import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
const News = lazy(() => import(/* webpackPrefetch: true */ "./pages/news"));
const NewsInner = lazy(
  () => import(/* webpackPrefetch: true */ "./pages/news-inner")
);
const Participants = lazy(
  () => import(/* webpackPrefetch: true */ "./pages/participants")
);
const Media = lazy(() => import(/* webpackPrefetch: true */ "./pages/media"));

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
      { element: <News />, path: "/news" },
      { element: <NewsInner />, path: "/news/:id" },
      { element: <Participants />, path: "/participants" },
      { element: <Media />, path: "/media" },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
