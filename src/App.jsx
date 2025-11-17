import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Layout/Footer";
import { appRoutes } from "./routes/appRoute";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {appRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
