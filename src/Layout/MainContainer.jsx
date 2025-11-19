import { Suspense } from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import { appRoutes } from "../routes/appRoute";
import Footer from "./Footer";

function MainContainer() {
  const path = useLocation();
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
      {path.pathname === "/" && <Footer />}
    </>
  );
}

export default MainContainer;
