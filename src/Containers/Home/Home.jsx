import React, { Component } from "react";
import { APIkey } from "../../Utility/Config/Key";
import { getTopMovies } from "../../Utility/Helpers/GetTopMovies";
import { connect } from "react-redux";
import { addTopMovies } from "../../Actions/index";
import CardContainer from "../../Components/CardContainer/CardContainer";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      topMovies: [],
      moviesArray: []
    };
  }
  async componentDidMount() {
    let movies = await getTopMovies(APIkey);
    this.props.addTopMovies(movies);
  }

  render() {
    return (
      <section className="home-container">

        <h2 className="home-title"> </h2>

        { this.props.topMovies.length > 0 ? (
          <CardContainer
            topMovies={this.props.topMovies}
            user={this.props.user}
          />
        ) : (
          <div />
        )}
      </section>
    );
  }
}
export const mapStateToProps = state => ({
  topMovies: state.topMovies,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addTopMovies: movies => dispatch(addTopMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
