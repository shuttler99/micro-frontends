import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./component/MarketingApp";

export const App = () => {
  console.log(mount);
  return (
    <>
      <h1>Hello</h1>
      <MarketingApp />
    </>
  );
};

export default App;

// We will  create a git mono repo
// container
// MarketingAppdashboard
// Auth