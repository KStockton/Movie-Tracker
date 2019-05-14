import React, { Component } from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
import { addUser } from "../../Actions/index";
import { connect } from "react-redux";
import SignInUser from "./SignInForms/SignInUser";
import NewUser from "./SignInForms/NewUser";
import PropTypes from 'prop-types';


class UserSignIn extends Component {
  constructor(props) {
    console.log(props)
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      newUserBool: false,
      user: {favorites: []},
      status: ""
    };
  }

  handleLogin = async e => {
    e.preventDefault();
    const { name, email, password, newUserBool } = this.state;
    if (newUserBool) {
      return await this.userCreation(email, name, password);
    } else {
      return await this.userSignIn(email, password);
    }
  };
  
  userSignIn = async (email, password) => {
    const url = "users";
    try {
      const userResponse = await postUsers(url, "POST", { password, email });
      const { data } = userResponse;
      const checkFavePath = `users/${data.id}/favorites`
      let faves = await postUsers(checkFavePath, "GET")
      this.props.addUser(data);
      this.props.user.favorites = faves.data
      this.setState({ status: "Successful" });
    } catch (e) {
      this.setState({ status: "The username or password is incorrect!" });
    }
  };

  
  userCreation = async (email, name, password) => {
    const url = "users/new";
    try {
      const response = await postUsers(url, "POST", { name, password, email });
      if (response.error !== undefined) {
        this.setState({ status: "That email is already in use!" });
      } else {
        this.setState({ newUserBool: false });
      }
    } catch (e) {}
  };


  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value, status: '' });
  };

  handleToggleForm = e => {
    e.preventDefault();
    const { newUserBool } = this.state;
    this.setState({ newUserBool: !newUserBool, status: "" });
  };

  render() {
    return !this.state.newUserBool ? (
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

UserSignIn.propTypes = {
  addUser: PropTypes.func,
  user: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSignIn);
