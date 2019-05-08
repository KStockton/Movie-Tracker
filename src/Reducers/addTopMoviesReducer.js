export const addTopMoviesReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TOP_MOVIES': return action.topMovies;
        default: return state;
    }
}