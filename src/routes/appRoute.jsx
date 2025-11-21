import React from "react";
import PageTransition from "../components/transitions/PageTransition";
// lazy import
const Home = React.lazy(() => import("../views/home/Home"));
const Search = React.lazy(() => import("../components/search/SearchComponent"));
const Menu = React.lazy(() => import("../components/menu/Menu"));

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
        <Search />{" "}
      </PageTransition>
    ),
  },
  {
    path: "/menu",
    element: (
      <PageTransition>
        {" "}
        <Menu />
      </PageTransition>
    ),
  },
];
