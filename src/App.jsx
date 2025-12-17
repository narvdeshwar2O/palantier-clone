import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainContainer from "@/Layout/MainContainer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainContainer />
    </BrowserRouter>
  );
}

export default App;
