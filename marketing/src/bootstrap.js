import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("test-div-here");

  if (el) {
    mount(el);
  }
}

export { mount };
