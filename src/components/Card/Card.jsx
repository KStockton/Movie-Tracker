import React from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUserFavorites } from "../../Actions/";

// import noFav from "../../Images/noFav.svg";
// import fav from "../../Images/fav.svg";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited : this.props.movie.favorited
    };
  }

  handleFavorite = async () => {
    const { movie, user } = this.props;
    const {
      id,
      overview,
      vote_average,
      release_date,
      poster_path,
      title
    } = movie;
    const userFavInfo = {
      movie_id: id,
      user_id: user.id,
      title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      release_date: release_date,
      overview: overview
    };
    let uniqueMovie = this.props.user.favorites.filter(
      movie => movie.movie_id === userFavInfo.movie_id
    );
    if (this.props.user !== undefined && uniqueMovie.length === 0) {
      const favPath = "users/favorites/new";
      let result = await postUsers(favPath, "POST", userFavInfo);
      const checkFavePath = `users/${user.id}/favorites`;
      let faves = await postUsers(checkFavePath, "GET");
      this.props.setUserFavorites(faves.data);
      return result;
    } else {
      const path = `users/${this.props.user.id}/favorites/${
        userFavInfo.movie_id
      }`;
      let result = await postUsers(path, "DELETE", {
        id: this.props.user.id,
        movie_id: userFavInfo.movie_id
      });
      const checkFavePath = `users/${user.id}/favorites`;
      let faves = await postUsers(checkFavePath, "GET");
      this.props.setUserFavorites(faves.data);
      this.setState({ favorited: !this.props.movie.favorited });
      return result;
    }
  };
  
  render() {
    const { name } = this.props.user;
    const { vote_average, poster_path } = this.props.movie;
    console.log("rendering");
    return (
      <div className="card-wrapper">
        <div
          className="card-background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`
          }}
        >
          <article className="card-info">
            <section className="card-button-container">
              <button className="card-button"> More Info</button>
              {name === undefined ? (
                <NavLink
                  to="/login"
                  className="card-button"
                >
                  Add to List
                </NavLink>
              ) : (
                <NavLink
                  to="/"
                  className="card-button"
                  onClick={() => this.handleFavorite()}
                >
                  Add to List
                </NavLink>
              )}
              <span className="rating">
                Rating: <span className="card-rating">{vote_average}</span>
              </span>
            </section>
          </article>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  setUserFavorites: user => dispatch(setUserFavorites(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
