import React from "react";
import Card from "../../Containers/Card/Card";
import PropTypes from 'prop-types';


export const CardContainer = ({ topMovies, user }) => {
  let cards;
  if (topMovies.length !== undefined) {
     cards = topMovies.map(movie => {
      return <Card movie={movie} key={movie.id} user={user} />;
    });
  }
  return (
    <div className="card-container-wrapper">
      <section className="core-card-container">{cards}</section>

    </div>
  );
};

// CardContainer.propTypes = {
//   user: PropTypes.object,
//   topMovies: PropTypes.array
// }

