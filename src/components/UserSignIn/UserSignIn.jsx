import React, { Component } from "react";
import {postUsers} from '../../Utility/Fetches/PostUsers'
class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }


  handleLogin = async (url, method, body) => {
    const response = await postUsers(url, method, body)
    console.log(response)
  }

  createAccount = async e => {
    e.preventDefault();
    const { name, email, password} = this.state;
    const url = 'users/new';
    await this.handleLogin(url, 'POST', {name, password, email})
  };

  


  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <section className="user-sign-in-container">
        <form onSubmit={this.createAccount}>
          <label>name</label>
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
        </form>
      </section>
    );
  }
}

export default UserSignIn;
