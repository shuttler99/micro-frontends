import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./component/MarketingApp";
import Header from "./component/Header";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

export const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;

// We will  create a git mono repo
// container
// MarketingAppdashboard
// Auth
