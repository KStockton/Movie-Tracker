import React, { Component } from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
import { addUser } from "../../Actions/index";
import { connect } from "react-redux";
import SignInUser from "./SignInForms/SignInUser";
import NewUser from "./SignInForms/NewUser";

class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      newUser: false,
      user: {}
    };
  }

  handleLogin = async e => {
    e.preventDefault();
    const { name, email, password, newUser } = this.state;
    if (newUser) {
      const url = "users/new";
      const newUser = await postUsers(url, "POST", { name, password, email });
    } else {
      const url = "users";
      const userResponse = await postUsers(url, "POST", { password, email });
      const { data, status, message } = userResponse;
      this.props.addUser(data);
      console.log(status, message);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleToggleForm = e => {
    e.preventDefault();
    const { newUser } = this.state;
    this.setState({ newUser: !newUser });
  };

  render() {
    return !this.state.newUser ? (
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
