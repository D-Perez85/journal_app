import React, {useState, useEffect} from "react";
import { Switch, BrowserRouter as Router, Route,  Redirect } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import {firebase} from "../firebase/firebase-config"
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {

const dispatch = useDispatch(); 
const [checking, setChecking] = useState(true);
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
    firebase.auth().onAuthStateChanged( async(user) => {
      if(user?.uid){
       dispatch(login(user.uid, user.displayName)); 
       setIsLoggedIn(true); 
      }else{
        setIsLoggedIn(false)
      }
      setChecking(false)
    }); 
  }, [dispatch, setChecking, setIsLoggedIn]);
  
  
  if (checking) {
    return (
      <h3>Wait...</h3>
    )
  }
  
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn}/>
          <PrivateRoute exact path="/" component={JournalScreen} isAuthenticated={isLoggedIn} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
