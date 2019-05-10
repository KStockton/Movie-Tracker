import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeUser } from "../../Actions";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return this.props.user.name === undefined ? (
      <nav>
        <ul>
          <div className="main-nav-container">
            <h1 className="nav-title">Movie Tracker</h1>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
          </div>
          <section className="sign-in-container" />
          <li>
            <NavLink to="/login" className="nav-link">
              Log in/Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    ) : (
      <nav>
        <ul>
          <div className="main-nav-container">
            <h1 className="nav-title">Movie Tracker</h1>
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
          </div>
          <section className="sign-in-container" />

          <li className="nav-signed-in-container">
            <span className="nav-signed-in-user">
              Signed in as: {this.props.user.name}
            </span>
            <button
              className="nav-title-signout-button"
              onClick={() => this.props.removeUser({})}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  removeUser: user => dispatch(removeUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
