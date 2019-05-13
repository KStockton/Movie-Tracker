import React from 'react';


export const Movie = (props) => {
  const {title, overview, poster_path, release_date} = props.location.state.movie
  return (
    <div
          className="card-background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`
          }}
        >
      <h1>{title}</h1>
      <h2>{overview}</h2>
    </div>
  )
}

