import { combineReducers } from 'redux';
import { addTopMoviesReducer } from './addTopMoviesReducer';
import { addTopTVShowsReducer } from './addTopTVShowsReducer'
const rootReducer = combineReducers({
    topMovies : addTopMoviesReducer,
    topTVShows: addTopTVShowsReducer
})

export default rootReducer;