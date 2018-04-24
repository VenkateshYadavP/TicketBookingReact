import { combineReducers } from "redux";
import movieData from "./moviesReducer"
export default combineReducers(
    {
            movies: movieData
    }
);