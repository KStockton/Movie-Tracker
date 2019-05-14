import React from "react";
import Card from "../../Containers/Card/Card";
import PropTypes from 'prop-types';


const CardContainer = ({ topMovies, user }) => {

  let card;
  if (topMovies.length !== undefined) {
     card = topMovies.map(movie => {
      return <Card movie={movie} key={movie.id} user={user} />;
    });
  }
  return (
    <div className="card-container-wrapper">
      <section className="core-card-container">{card}</section>

    </div>
  );
};

CardContainer.propTypes = {

  user: PropTypes.object,
  topMovies: PropTypes.array
}

export default CardContainer;
