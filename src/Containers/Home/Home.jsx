import React, { Component } from "react";
import { APIkey } from "../../Utility/Config/Key";
import { getTopMovies } from "../../Utility/Helpers/GetTopMovies";
import { connect } from "react-redux";
import { getTopTVShows } from "../../Utility/Helpers/GetTopTVShows";
import { addTopMovies, addTopTVShows } from "../../Actions/index";
import CardContainer from "../../Components/CardContainer/CardContainer";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      topMovies: [],
      currentPage: 0,
      topTVShows: [],
      moviesArray: []
    };
  }
  async componentDidMount() {
    const { currentPage } = this.state;
    let incrementedPage = currentPage + 1;
    let movies = await getTopMovies(APIkey, incrementedPage);
    this.props.addTopMovies(movies);
  }

  render() {
    console.log("rendered");
    return (
      <section className="home-container">
        <h2 className="home-title">Top Movies</h2>
        {this.props.topMovies.length > 0 ? (
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
const mapStateToProps = state => ({
  topMovies: state.topMovies,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addTopMovies: movies => dispatch(addTopMovies(movies)),
  addTopTVShows: topShows => dispatch(addTopTVShows(topShows))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
