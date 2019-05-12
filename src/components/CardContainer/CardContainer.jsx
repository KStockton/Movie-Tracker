import React from 'react'
import Card from '../Card/Card'


const CardContainer = ({topMovies, user}) => {
  const mainCard = topMovies.pop()
  const card = topMovies.slice(1).map(movie => {
    return <Card movie={movie} key={movie.id} user={user}/>
  })
  return (
    <div className="CardContainer-wrapper"> 
      {card}
    </div>
  )
}

export default CardContainer;