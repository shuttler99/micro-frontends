import React, { lazy, Suspense, useState, useEffect } from "react";

import Header from "./component/Header";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const MarketingApp = lazy(() => import("./component/MarketingApp"));
const AuthApp = lazy(() => import("./component/AuthApp"));
const DashBoardLazy = lazy(() => import("./component/DashBoardApp"));

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSignOut = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isLoggedIn} onSignOut={onSignOut} />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/auth">
              <AuthApp setisLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/dashboard">
              {!isLoggedIn && <Redirect to="/" />}
              <DashBoardLazy />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};

export default App;
