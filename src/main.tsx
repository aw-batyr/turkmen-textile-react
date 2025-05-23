import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  About,
  B2b,
  BecomeSponsor,
  Contacts,
  Home,
  Impressions,
  Media,
  News,
  NewsInner,
  Participants,
  StendForm,
} from "./pages";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Home />, path: "" },
      { element: <About />, path: "about" },
      { element: <B2b />, path: "B2B-B2G" },
      { element: <BecomeSponsor />, path: "become-sponsor" },
      { element: <StendForm />, path: "stend-form" },
      { element: <Contacts />, path: "contacts" },
      { element: <News />, path: "news" },
      { element: <NewsInner />, path: "news/:id" },
      { element: <Participants />, path: "participants" },
      { element: <Media />, path: "media" },
      { element: <Impressions />, path: "impressions" },
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
