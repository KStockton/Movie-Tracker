import React, { Component } from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      newUser: false
    };
  }



  
  handleLogin = async e => {
    e.preventDefault();
    const { name, email, password, newUser } = this.state;
    if (newUser) {
      const url = "users/new";
      const newUser = await postUsers(url, "POST", { name, password, email });
      console.log(newUser)
    } else {
      const url = "users";
      const user = await postUsers(url, "POST", { password, email })
      console.log(user)
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  toggleForm = e => {
    e.preventDefault();
    const { newUser } = this.state;
    this.setState({ newUser: !newUser });
  };

  render() {
    return this.state.newUser ? (
      <section className="user-sign-in-container">
        <form
          onSubmit={this.handleLogin}
          className="create-account-form login-form"
        >
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>Password</label>
          <input
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Create Account</button>
          <button onClick={this.toggleForm}>
            Already have an account? Sign in!
          </button>
        </form>
      </section>
    ) : (
      <section className="user-sign-in-container">
        <form onSubmit={this.handleLogin} className="sign-in-form login-form">
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label>Password</label>
          <input
            name="password"
            type="text"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Sign In</button>
          <button onClick={this.toggleForm}>
            New user? Create an Account!
          </button>
        </form>
      </section>
    );
  }
}

export default UserSignIn;
