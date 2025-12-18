import { Routes, useLocation, Route } from "react-router-dom";
import { useState } from "react";
import { appRoutes } from "../routes/appRoute";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import GetStarted from "../components/GetStarted";


function MainContainer() {
  const path = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {path.pathname !== "/" &&
          path.pathname !== "/search" &&
          path.pathname !== "/menu" && (
            <Nav onOpenDrawer={() => setIsDrawerOpen(true)} />
          )}
        <Routes location={path} key={path.pathname}>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AnimatePresence>
      <AnimatePresence>
        {isDrawerOpen && <GetStarted onClose={() => setIsDrawerOpen(false)} />}
      </AnimatePresence>
      {path.pathname === "/" && <Footer />}
    </>
  );
}

export default MainContainer;
