import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory, createMemoryHistory } from "history";
import React from "react";

const mount = (
  element,
  { onNavigate, defaultHistory, initialPath, onSignedIn }
) => {
  const history =
    defaultHistory ?? createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen((location) => {
      onNavigate(location);
    });
  }

  ReactDOM.render(<App history={history} onSignedIn={onSignedIn} />, element);
  const onParentNavigate = (location) => {
    if (history.location.pathname !== location.pathname) {
      history.push(location.pathname);
    }
  };

  return {
    onParentNavigate: onParentNavigate,
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("auth-div-here");
  const defaultHistory = createBrowserHistory();
  if (el) {
    mount(el, { defaultHistory: defaultHistory });
  }
}

export { mount };
