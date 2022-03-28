import React from "react";
import { Switch, BrowserRouter as Router, Route,  Redirect } from "react-router-dom";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter}/>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
