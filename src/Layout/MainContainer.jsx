import { Routes, useLocation, Route } from "react-router-dom";
import { appRoutes } from "../routes/appRoute";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

function MainContainer() {
  const path = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={path} key={path.pathname}>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AnimatePresence>
      {path.pathname === "/" && <Footer />}
    </>
  );
}

export default MainContainer;
