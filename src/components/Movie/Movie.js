import { NavLink } from "react-router-dom";
import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Card } from "../../Containers/Card/Card";
import PropTypes from 'prop-types'

library.add(faArrowLeft)

export const Movie = props => {

  const {
    overview,
    backdrop_path,
    poster_path,
    release_date,
    title,
    vote_average
  } = props.location.state.movie;
  
  const releaseDate = release_date.substring(0, 4);
  const rating = vote_average * 10;
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const backDropUrl = `https://image.tmdb.org/t/p/w1280${backdrop_path}`;
  
  return (
    <article className="movie-card">
      <div className="movie-card-background">
        <img alt="backdrop" src={backDropUrl} />
      </div>
      <article className="movie-card-container">
        <section className="movie-card-info">
          <div>
            <h4 className="movie-text">{title}</h4>
            <br />
            <div className="movie-rating">
              <span className="vote-average"> Rating : {rating} %</span>
              <span className="release-date"> {releaseDate}</span>
            </div>
          </div>
          <br />
          <span>Description: </span>
          <br />
          <p className="movie-text movie-overview">{overview}</p>
        </section>
        <section className="movie-poster-path">
          <img alt="poster" src={posterUrl} />
        </section>
      </article>
      <NavLink className="go-back-btn" to="/">
     <FontAwesomeIcon icon="arrow-left" />
      </NavLink>
    </article>
  );
};

Card.propTypes = {
  movie: PropTypes.object
}
