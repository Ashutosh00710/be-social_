import React from "react";
import "./App.css";
import SignInSide from "./pages/signin/signin.component.jsx";
import SignUp from "./pages/signup/signup.component.jsx";
import Posts from "./pages/posts.component.jsx";
import { default as Profile } from "./pages/profile.component";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignInSide} />
        <Route path="/signup" component={SignUp} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
