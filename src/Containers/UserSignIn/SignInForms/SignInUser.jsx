import React from "react";
import { Redirect } from "react-router-dom";

export default function SignInUser(props) {
  return props.status === "Successful" ? (
    <Redirect to="/" />
  ) : (
    <section className="user-sign-in-container">
      <form onSubmit={props.handleLogin} className="sign-in-form login-form">
        <h3 className="user-form-title">SIGN IN</h3>
        <div className="input-container">
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={props.handleChange}
            value={props.email}
            className="user-input"
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={props.handleChange}
            value={props.password}
            className="user-input"
          />
        </div>
        <span className="status-msg">{props.status}</span>
        <div className="button-container">
          <button
            className="user-form-button sign-in-button"
            onClick={props.handleLogin}
          >
            Sign In
          </button>
          <button className="user-form-link" onClick={props.handleToggleForm}>
            New user? Create an Account!
          </button>
        </div>
      </form>
    </section>
  );
}
