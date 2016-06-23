import React, { Component } from 'react';

import { reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Login extends Component {
  componentWillUnmount() {
    this.props.removeErrorMessage();
  }

  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.loginError) {
      //make a case statement here to show different things depending on error message
      return <div>{this.props.loginError}</div>
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <div className="login">
        <h1>Welcome back</h1>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input {...email} type="text" placeholder='Email' />
          {email.touched && email.error && <div className="errorTextColor">{email.error}</div>}
          <input {...password} type="password" placeholder='Password' />
          {password.touched && password.error && <div className="errorTextColor">{password.error}</div>}
          { this.renderError() }
          <button type="submit" id="login-button">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { loginError: state.auth.error };// show error message
}

function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
}

export default reduxForm({
  form: 'login',
  fields: ['email','password'],
  validate
}, mapStateToProps, actions)(Login);