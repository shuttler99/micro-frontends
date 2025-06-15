import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { Router, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React from "react";

const generateClassName = createGenerateClassName({ productionPrefix: "ma" });

export const App = ({ history }) => {
  console.log(history.location.pathname);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
