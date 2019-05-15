import React from "react";
import { Redirect } from "react-router-dom";

export const SignInUser = (props) => {
  return props.status === "Successful" ? (
    <Redirect to="/" />
  ) : (
    <section className="user-sign-in-container">
     <div className="user-sign-in-background">
        <img
          alt="movies"
          src="https://i.pinimg.com/originals/86/f1/99/86f199d0c6f5cedd14c121164fa5fafc.jpg"
        />
      </div>
      <form onSubmit={props.handleLogin} className="sign-in-form login-form">
        <h3 className="user-form-title">Sign In</h3>
        <div className="input-container">
          <input
            name="email"
            placeholder="Email..."
            type="email"
            onChange={props.handleChange}
            value={props.email}
            className="user-input"
            id="emails"
          />
        </div>
        <div className="input-container">
          <input
            name="password"
            type="password"
            placeholder="Password..."
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
