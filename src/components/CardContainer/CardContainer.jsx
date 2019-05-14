import React from "react";
import Card from "../Card/Card";

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

export default CardContainer;
