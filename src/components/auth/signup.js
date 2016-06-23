import React, { Component } from 'react';

import { reduxForm } from 'redux-form';

import * as actions from '../../actions';


class Signup extends Component {

  handleFormSubmit({ username, email, password }) {
    this.props.signupUser({ username, email, password });
  }

  renderError() {
    if (this.props.signupError) {
      //make a case statement here to show different things depending on error message
      return <div>{this.props.signupError}</div>
    }
  }

  render() {
    const { handleSubmit, fields: { username, email, password, confirmPassword }} = this.props;

    return (
      <div className="login">
        <h1>Welcome to TechPrep</h1>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input {...username} type="text" placeholder="Username" />
          {username.touched && username.error && <div className="errorTextColor">{username.error}</div>}
          <input {...email} type="email" placeholder="Email" />
          {email.touched && email.error && <div className="errorTextColor">{email.error}</div>}
          <input {...password} type="password" placeholder="Password" />
          {password.touched && password.error && <div className="errorTextColor">{password.error}</div>}
          <input {...confirmPassword} type="password" placeholder="Confirm Password" />
          {confirmPassword.touched && confirmPassword.error && <div className="errorTextColor">{confirmPassword.error}</div>}
          { this.renderError() }
          <button type="submit" id="login-button">Signup</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { signupError: state.auth.error }; //add error message here
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['username', 'email', 'password', 'confirmPassword'],
  validate
}, mapStateToProps, actions)(Signup);