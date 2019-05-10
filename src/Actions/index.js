export const addTopMovies = topMovies => ({
  type: "ADD_TOP_MOVIES",
  topMovies
});

export const addTopTVShows = topTVShows => ({
  type: "ADD_TOP_TV_SHOWS",
  topTVShows
});

export const addUser = user => ({
  type: "ADD_USER",
  user
});

export const removeUser = user => ({
  type: "REMOVE_USER",
  user
})