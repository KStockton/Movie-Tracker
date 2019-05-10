import React from "react";
import { Redirect } from "react-router-dom";

export default function SignInUser(props) {
  return props.status === "Successful" ? (
    <Redirect to="/" />
  ) : (
    <section className="user-sign-in-container">
      <form onSubmit={props.handleLogin} className="sign-in-form login-form">
        <label>Email</label>
        <input
          name="email"
          type="email"
          onChange={props.handleChange}
          value={props.email}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={props.handleChange}
          value={props.password}
        />
        <button onClick={props.handleLogin}>Sign In</button>
        <button onClick={props.handleToggleForm}>
          New user? Create an Account!
        </button>
      </form>
    </section>
  );
}
