export const addTopMovies = topMovies => ({
  type: "ADD_TOP_MOVIES",
  topMovies
});

export const addUser = user => ({
  type: "ADD_USER",
  user
});

export const removeUser = user => ({
  type: "REMOVE_USER",
  user
})

export const setUserFavorites = (user) => ({
  type: "SET_USER_FAVORITE",
  user
}) 