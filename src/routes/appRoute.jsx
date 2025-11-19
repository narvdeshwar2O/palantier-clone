import React from "react";
const Home = React.lazy(() => import("../views/home/Home"));
const Search = React.lazy(() => import("../components/search/SearchComponent"));
const Menu = React.lazy(() => import("../components/menu/Menu"));

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/menu", element: <Menu /> },
];
