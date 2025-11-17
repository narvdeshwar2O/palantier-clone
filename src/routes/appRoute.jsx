import React from "react";

const Home = React.lazy(() => import("../views/home/Home"));
const Search = React.lazy(() => import("../components/search/Search"));

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
];
