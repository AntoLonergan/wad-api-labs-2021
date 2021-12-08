import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';


export const HomePage = () => {
  const context = useContext(MoviesContext);
  return <>
      <h2>Movies Data </h2>
      <div>
          {context.movies.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
      </div>
  </>
}

return HomePage;