import React, { Component } from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
import { addUser } from "../../Actions/index";
import { connect } from "react-redux";
import SignInUser from "./SignInForms/SignInUser";
import NewUser from "./SignInForms/NewUser";
import { Route } from "react-router-dom"

class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      newUserBool: false,
      user: {},
      path: "/user-sign-in"
    };
  }

  handleLogin = async e => {
    e.preventDefault();
    const { name, email, password, newUserBool } = this.state;
    if (newUserBool) {
      const url = "users/new";
      await postUsers(url, "POST", { name, password, email });
    } else {
      const url = "users";
      const userResponse = await postUsers(url, "POST", { password, email });
      const { data, status, message, newUserBool } = userResponse;
      this.props.addUser(data);
      console.log(status, message);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  determineUserPath = newUserBool => {
    if (newUserBool) {
      this.setState({ path: "/user-settings" });
    }
  };

  handleToggleForm = e => {
    e.preventDefault();
    const { newUserBool } = this.state;
    this.setState({ newUserBool: !newUserBool });
  };

  render() {
    return  !this.state.newUserBool ? (
      <SignInUser
        {...this.state}
        handleChange={this.handleChange}
        handleToggleForm={this.handleToggleForm}
        handleLogin={this.handleLogin}
      />
    ) : (
      <NewUser
        {...this.state}
        handleChange={this.handleChange}
        handleToggleForm={this.handleToggleForm}
        handleLogin={this.handleLogin}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignIn);
