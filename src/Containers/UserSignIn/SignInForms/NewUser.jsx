import React from "react";
export default function NewUser(props) {
  return (
    <section className="user-sign-in-container">
      <div className="user-sign-in-background">
        <img
          alt="movies"
          src="https://i.pinimg.com/originals/86/f1/99/86f199d0c6f5cedd14c121164fa5fafc.jpg"
        />
      </div>
      <form
        onSubmit={props.handleLogin}
        className="create-account-form login-form"
      >
        <h3 className="user-form-title">NEW USER</h3>
        <div className="input-container">
          <input
          placeholder="Name..."
            name="name"
            type="text"
            onChange={props.handleChange}
            value={props.name}
            className="user-input"
            maxLength="24"
            minLength="1"
          />
        </div>
        <div className="input-container">
          <input
          placeholder="Email..."

            name="email"
            type="email"
            onChange={props.handleChange}
            value={props.email}
            className="user-input"
            maxLength="24"
            minLength="2"
          />
        </div>
        <div className="input-container">
          <input
          placeholder="Password..."

            name="password"
            type="password"
            onChange={props.handleChange}
            value={props.password}
            className="user-input"
            maxLength="12"
            minLength="8"
          />
        </div>
        <span className="status-msg">{props.status}</span>
        <div className="button-container">
          <button type="submit " className="user-form-button sign-in-button">
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
