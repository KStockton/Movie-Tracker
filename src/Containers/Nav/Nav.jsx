import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { removeUser } from "../../Actions";
import PropTypes from 'prop-types';


export class Nav extends Component {
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
            <li>
              <NavLink to="/favorites" className="nav-link">
                Favorites
              </NavLink>
            </li>
          </div>
          <section className="sign-in-container" />

          <li className="nav-signed-in-container">
            <span className="nav-signed-in-user">
              Signed in as:{" "}
              <span className="nav-user-name">{this.props.user.name} </span>
            </span>
            <button
              className="nav-title signout-button"
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

export const mapStateToProps = state => ({
  user: state.user
});
export const mapDispatchToProps = dispatch => ({
  removeUser: user => dispatch(removeUser(user))
});

Nav.propTypes = {
  user: PropTypes.object,
  removeUser: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
