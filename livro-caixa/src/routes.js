import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import CreateOperator from "./pages/CreateOperator";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp"
import ListOperator from "./pages/ListOperator";
import makeTransactions from "./pages/MakeTransaction"


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUp} />
      <Route path="/createOperator" component={CreateOperator}/>
      <Route path="/listOperator" component={ListOperator}/>
      <Route path="/makeTransactions" component={makeTransactions}/>
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
