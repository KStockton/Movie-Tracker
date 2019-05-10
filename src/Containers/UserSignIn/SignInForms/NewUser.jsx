import React from "react";
export default function NewUser(props) {
  return (
    <section className="user-sign-in-container">
      <form
        onSubmit={props.handleLogin}
        className="create-account-form login-form"
      >
        <h3 className="user-form-title">NEW USER</h3>
        <div className="input-container">
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={props.handleChange}
            value={props.name}
            className="user-input"

          />
        </div>
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
        <div className="button-container">
          <button type="submi " className="user-form-button sign-in-button">
            Create Account
          </button>
          <button className="user-form-link" onClick={props.handleToggleForm}>
            Already have an account? Sign in!
          </button>
        </div>
      </form>
    </section>
  );
}
