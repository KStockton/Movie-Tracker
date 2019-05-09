import React from "react";
import { Link , Redirect} from "react-router-dom";

export default function SignInUser(props) {
  const path = props.status === "Successful" ? "/" : "/login";
  return (
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
        <button type="submit">
          <Link exact="true" to='/'>Sign In</Link>
        </button>
        <button onClick={props.handleToggleForm}>
          New user? Create an Account!
        </button>
      </form>
    </section>
  );
}
