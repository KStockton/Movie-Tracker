import { combineReducers } from 'redux';
import { addTopMoviesReducer } from './addTopMoviesReducer';
const rootReducer = combineReducers({
    topMovies : addTopMoviesReducer
})

export default rootReducer;