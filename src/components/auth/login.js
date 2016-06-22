import React, { Component } from 'react';

import { reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Login extends Component {
  handleFormSubmit({ email, password }) {
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.loginError) {
      // show error message here
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="login">
        <h1>Welcome back</h1>
        <form className="form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <input className={email.touched && email.error && 'errorColor'} {...email} type="text" placeholder={(email.touched && email.error) ? email.error : 'Email'} />
          <input className={password.touched && password.error && 'errorColor' } {...password} type="password" placeholder={(password.touched && password.error) ? password.error : 'Password'} />
          { this.renderError() }
          <button type="submit" id="login-button">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {};// show error message
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