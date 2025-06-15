import React, { lazy, Suspense, useState } from "react";

import Header from "./component/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const MarketingApp = lazy(() => import("./component/MarketingApp"));
const AuthApp = lazy(() => import("./component/AuthApp"));

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSignOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isLoggedIn} onSignOut={onSignOut} />
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route path="/auth">
              <AuthApp setisLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
