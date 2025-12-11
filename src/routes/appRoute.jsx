import React from "react";
import PageTransition from "../components/transitions/PageTransition";

// lazy import
const Home = React.lazy(() => import("../views/home/Home"));
const Search = React.lazy(() => import("../components/search/SearchComponent"));
const Menu = React.lazy(() => import("../components/menu/Menu"));
const Aip = React.lazy(() => import("../views/platforms/aip/Aip"));
const Gotham = React.lazy(() => import("../views/platforms/gotham/Gotham"));
const GetStarted = React.lazy(() => import("../views/get-started/GetStarted"));
const Foundary = React.lazy(() =>import("../views/platforms/foundary/Foundary"));
const Ontalogy = React.lazy(() =>import("../views/platforms/ontology/Ontology"));

export const appRoutes = [
  {
    path: "/",
    element: (
      <PageTransition>
        <Home />
      </PageTransition>
    ),
  },
  {
    path: "/search",
    element: (
      <PageTransition>
        <Search />
      </PageTransition>
    ),
  },
  {
    path: "/menu",
    element: (
      <PageTransition>
        <Menu />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/aip",
    element: (
      <PageTransition>
        <Aip />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/gotham",
    element: (
      <PageTransition>
        <Gotham />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/foundary",
    element: (
      <PageTransition>
        <Foundary />
      </PageTransition>
    ),
  },
  {
    path: "/platforms/ontology",
    element: (
      <PageTransition>
        <Ontalogy />
      </PageTransition>
    ),
  },
  {
    path: "/get-started",
    element: (
      <PageTransition>
        <GetStarted />
      </PageTransition>
    ),
  },
];
