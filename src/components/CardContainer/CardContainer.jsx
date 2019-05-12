import React from "react";
import Card from "../Card/Card";

const CardContainer = ({ topMovies, user }) => {
  // console.log('cardC' , topMovies)
  // const mainCard = topMovies.slice(0, 3).map(movie => {
  //   return <MainCard movie={movie} key={movie.id} user={user} />;
  // });
  const mainCard = topMovies[0];
  console.log(mainCard);
  const card = topMovies.map(movie => {
    return <Card movie={movie} key={movie.id} user={user} />;
  });

  return (
    <div className="card-container-wrapper">
      {/* <section className="main-card-container">
        {" "}
        <div
          className="main-card-backdrop"
          style={{
            backgroundImage: `url(https://movieposterhd.com/wp-content/uploads/2019/03/Wallpapers-Avengers-Endgame.jpg)`
          }}
        />
      </section> */}
      <section className="core-card-container">{card}</section>
    </div>
  );
};

export default CardContainer;
