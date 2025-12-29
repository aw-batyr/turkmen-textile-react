import App from "./App";
import { Error } from "./components/layout/error";
import {
  About,
  B2b,
  BecomeSponsor,
  Contacts,
  Home,
  Impressions,
  ImpressionsTm,
  Media,
  News,
  NewsInner,
  Participants,
  ParticipationOptions,
  PartnerOpportunities,
  StendForm,
} from "./pages";

export const routes = [
  {
    element: <App />,
    path: "/",
    children: [
      { element: <Home />, path: "", errorElement: <Error /> },
      { element: <About />, path: "about", errorElement: <Error /> },
      { element: <B2b />, path: "B2B-B2G", errorElement: <Error /> },
      {
        element: <BecomeSponsor />,
        path: "become-sponsor",
        errorElement: <Error />,
      },
      { element: <StendForm />, path: "stend-form", errorElement: <Error /> },
      { element: <Contacts />, path: "contacts", errorElement: <Error /> },
      { element: <News />, path: "news", errorElement: <Error /> },
      { element: <NewsInner />, path: "news/:id", errorElement: <Error /> },
      {
        element: <Participants />,
        path: "participants",
        errorElement: <Error />,
      },
      { element: <Media />, path: "media", errorElement: <Error /> },
      {
        element: <Impressions />,
        path: "impressions",
        errorElement: <Error />,
      },
      {
        element: <ImpressionsTm />,
        path: "impressions-tm",
        errorElement: <Error />,
      },
      {
        element: <ParticipationOptions />,
        path: "participation-options",
        errorElement: <Error />,
      },
      {
        element: <PartnerOpportunities />,
        path: "partner-opportunities",
        errorElement: <Error />,
      },
    ],
  },
];
