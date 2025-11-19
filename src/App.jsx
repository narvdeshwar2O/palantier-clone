import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainContainer from "./Layout/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  );
}

export default App;
