import React from "react";
import Main from "../Main/Main.jsx";
import { Switch, Route } from "react-router-dom";
import UserSignIn from "../UserSignIn/UserSignIn";
import { connect } from "react-redux";
import Nav from '../Nav/Nav'

class App extends React.Component {
  render() {
    console.log("rendering");
    return (
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={UserSignIn} />
          <Route path="/user-settings" component={UserSignIn} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
