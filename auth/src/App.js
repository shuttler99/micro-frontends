import { Router, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

export const App = ({ history, onSignedIn }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signup">
            <SignUp onSignIn={onSignedIn} />
          </Route>
          <Route path="/auth/signin" component={Signup}>
            <Signin onSignIn={onSignedIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};

export default App;
