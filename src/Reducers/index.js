import { combineReducers } from 'redux';
import { addTopMoviesReducer } from './addTopMoviesReducer';
import { addTopTVShowsReducer } from './addTopTVShowsReducer'
import { userReducer } from './userReducer';
const rootReducer = combineReducers({
    topMovies : addTopMoviesReducer,
    topTVShows: addTopTVShowsReducer,
    user : userReducer
})

export default rootReducer;