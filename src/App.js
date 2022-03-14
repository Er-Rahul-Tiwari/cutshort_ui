import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import RoutesPage from "./views/Routing/Routes";
import "./App.scss";

const App = () => {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={RoutesPage} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
