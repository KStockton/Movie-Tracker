import React, { Component } from "react";
import { connect } from "react-redux";
import { addTopMovies } from "../../Actions/index";
import CardContainer from "../../Components/CardContainer/CardContainer";

export class Favorites extends Component {

  render() {
    return (
      <section className="home-container">
        <h2 className="home-title"> </h2>
        {this.props.user.name !== undefined &&
        this.props.user.favorites.length !== undefined ? (
          <CardContainer
            topMovies={this.props.user.favorites}
            user={this.props.user}
          />
        ) : (
          <div className="no-favorites">
            Log in to see favorites!
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topMovies: state.topMovies,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addTopMovies: movies => dispatch(addTopMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
