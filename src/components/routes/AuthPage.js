import React from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";
import { Route, NavLink } from "react-router-dom";

function AuthPage() {
  return (
    <div>
      <h1>AuthPage</h1>
      <NavLink to="/auth/signin" activeStyle={{ color: "red" }}>
        sign in
      </NavLink>
      <NavLink to="/auth/signup" activeStyle={{ color: "red" }}>
        sign up
      </NavLink>

      <Route
        path="/auth/signin"
        render={() => <SignInForm onSubmit={handleSignIn} />}
      />
      <Route
        path="/auth/signup"
        render={() => <SignUpForm onSubmit={handleSignUp} />}
      />
    </div>
  );
}
const handleSignIn = values => console.log("---", values);
const handleSignUp = values => console.log("---", values);

export default AuthPage;
