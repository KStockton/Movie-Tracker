import { combineReducers } from 'redux';
import { addTopMoviesReducer } from './addTopMoviesReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    topMovies : addTopMoviesReducer,
    user : userReducer
})

export default rootReducer;