import React from "react";
import SignInSide from "./pages/signin/signin.component.jsx";
import SignUp from "./pages/signup/signup.component.jsx";
import Posts from "./pages/posts.component.jsx";
import FormTextFields from "./pages/create-profile/create-profile.component";
import { default as Profile } from "./pages/profile.component";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import { clearCurrentProfile } from "./redux/actions/profileActions";
import store from "../src/redux/store";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";

// Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check if token is expired
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    //Clear current profile
    store.dispatch(clearCurrentProfile());
    //Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SignInSide} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
        <Route path="/create-profile" component={FormTextFields} />
      </Switch>
    </>
  );
}

export default App;
