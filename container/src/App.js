import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./component/MarketingApp";
import Header from "./component/Header";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  console.log(mount);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;

// We will  create a git mono repo
// container
// MarketingAppdashboard
// Auth
