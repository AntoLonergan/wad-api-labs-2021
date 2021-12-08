import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "../api/movie-api";

export const MoviesContext1 = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};

const MoviesContextProvider1 = props => {
  const [state, dispatch] = useReducer(reducer, { movies: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <MoviesContext1.Provider
      value={{
        movies: state.movies,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext1.Provider>
  );
};

export default MoviesContextProvider1;