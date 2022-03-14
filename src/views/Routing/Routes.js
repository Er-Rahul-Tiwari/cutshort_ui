import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import * as Constants from "constants/index";
import store from "store";
import { selfAuth } from "actions/auth";
// ALL COMPONENTS
import HomePage from "views/Components";
// NOT FOUND PAGE
import NotFoundPage from "views/NotFound";
// USER
import Step_first from "views/Auth/Steps/FirstStep/index";
import Step_second from "views/Auth/Steps/SecondStep/index";
import Step_third from "views/Auth/Steps/ThirdStep/index";
import Step_fourth from "views/Auth/Steps/FourthStep/index";

const Routes = () => {

  // SELF API FIRST-TIME RUN ONLY
  // useEffect(() => {
  //   if (localStorage.token) {
  //     store.dispatch(selfAuth());
  //   }
  // }, []);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Switch>
      {Constants.LOGIN_ROUTE.map((route) => (
        <PublicRoute
          exact
          key={route}
          path={route}
          restricted={true}
          component={Step_first}
        />
      ))}
      <PublicRoute exact path="/app/step/2" component={Step_second} />
      <PublicRoute exact path="/app/step/3" component={Step_third} />
      <PublicRoute exact path="/app/step/4" component={Step_fourth} />
      <PrivateRoute exact path={`/app/*`} name="Home" component={HomePage} />
      {/* NOT FOUND-COMPONENT */}
      {/* <Route exact path="/app/page-not-found" component={NotFoundPage} /> */}
    </Switch>
  );
};

export default Routes;
