import React from "react";
export default function NewUser(props) {
  return (
    <section className="user-sign-in-container">
      <form
        onSubmit={props.handleLogin}
        className="create-account-form login-form"
      >
        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={props.handleChange}
          value={props.name}
        />
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
        <button type="submit">Create Account</button>
        <button onClick={props.handleToggleForm}>
          Already have an account? Sign in!
        </button>
      </form>
    </section>
  );
}
