import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import CreateOperator from "./pages/CreateOperator";
import User from "./pages/User";
import HomePage from "./pages/HomePage";
import ListOperator from "./pages/ListOperator";



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
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
      <Route path="/user" component={User}/>
      <Route path="/CreateOperator" component={CreateOperator}/>
      <Route path="/ListOperator" component={ListOperator}/>
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
