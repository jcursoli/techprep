import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="login">
          <h1>Welcome</h1>
          <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" id="login-button">Login</button>
          </form>
        </div>
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
}