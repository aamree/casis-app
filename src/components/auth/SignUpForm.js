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
          <label htmlFor="email">Email</label>
          <Field name="email" component={ErrorField} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component={ErrorField} type="password" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) errors.email = "email is required";
  else if (!emailValidator.validate(email)) errors.email = "invalid email";

  if (!password) errors.password = "password is required";
  else if (password.length < 4) errors.password = "to short";

  return errors;
};

export default reduxForm({
  form: "auth",
  validate
})(SignUpForm);
