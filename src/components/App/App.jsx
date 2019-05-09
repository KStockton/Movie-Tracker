import React from "react";
import Main from "../Main/Main.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Home";
import UserSignIn from "../UserSignIn/UserSignIn";
import UserSettings from "../UserSettings/UserSettings";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.user.name === undefined ? (
                <Redirect to="/login"/>
              ) : (
                <Main />
              )
            }
          />
          <Route exact path="/" component={Main} />
          <Route path="/login" component={UserSignIn} />
          <Route path="/user-settings" component={UserSettings} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
