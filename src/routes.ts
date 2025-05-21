// import { lazy } from "react";
// import { RouteObject } from "react-router-dom";
// import App from "./App";

// const lazyLoad = (path: string) =>
//   lazy(() => import(/* webpackPrefetch: true */ path));

// const Home = lazyLoad("./pages/home");
// const About = lazyLoad("./pages/about");
// const B2b = lazyLoad("./pages/b2b");
// const BecomeSponsor = lazyLoad("./pages/become-sponsor");
// const StendForm = lazyLoad("./pages/stend-form");
// const Contacts = lazyLoad("./pages/contacts");
// const News = lazyLoad("./pages/news");
// const NewsInner = lazyLoad("./pages/news-inner");
// const Participants = lazyLoad("./pages/participants");
// const Media = lazyLoad("./pages/media");

// export const routes: RouteObject[] = [
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "B2B-B2G", element: <B2b /> },
//       { path: "become-sponsor", element: <BecomeSponsor /> },
//       { path: "stend-form", element: <StendForm /> },
//       { path: "contacts", element: <Contacts /> },
//       { path: "news", element: <News /> },
//       { path: "news/:id", element: <NewsInner /> },
//       { path: "participants", element: <Participants /> },
//       { path: "media", element: <Media /> },
//     ],
//   },
// ];
