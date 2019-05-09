import React from 'react'

export default function SignInUser(props) {
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
        type="text"
        onChange={props.handleChange}
        value={props.password}
      />
      <button type="submit">Sign In</button>
      <button onClick={props.handleToggleForm}>
        New user? Create an Account!
      </button>
    </form>
  </section>
  )
}
