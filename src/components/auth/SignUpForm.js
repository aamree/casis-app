import React from "react";
import { reduxForm, Field } from "redux-form";
import emailValidator from "email-validator";
import ErrorField from "./ErrorField";

function SignUpForm({ handleSubmit }) {
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login</label>
          <Field name="login" component={ErrorField} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component={ErrorField} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component={ErrorField} type="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            name="confirmPassword"
            component={ErrorField}
            type="password"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

const validate = ({ login, email, password, confirmPassword }) => {
  const errors = {};

  if (!login) errors.login = "login is required";

  if (!email) errors.email = "email is required";
  else if (!emailValidator.validate(email)) errors.email = "invalid email";

  if (!password && !confirmPassword) errors.password = "password is required";
  else if (password.length < 4 && confirmPassword.length < 4)
    errors.password = "to short";
  else if (password !== confirmPassword)
    errors.password = "password does not match";

  return errors;
};

export default reduxForm({
  form: "auth",
  validate
})(SignUpForm);
