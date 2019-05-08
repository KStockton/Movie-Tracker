export const addTopTVShowsReducer = (state = [], action) => {
  switch(action.type) {
      case 'ADD_TOP_TV_SHOWS': return action.topTVShows;
      default: return state;
  }
}