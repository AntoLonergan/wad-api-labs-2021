import React from "react";
import MovieReviewPage from "./pages/movieReviewPage";
import ReactDOM from "react-dom";
import SiteHeader from './components/siteHeader'
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./components/privateRoute/index";
import AuthHeader from "./components/authHeader/index";
import SignUpPage from "./pages/signUpPage";
import MovieProvider1 from "./contexts/moviesContext1";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
} );

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
          <AuthHeader />
        <SiteHeader />
        <MovieProvider1>
        <MoviesContextProvider>
            {" "}
            <Switch>
            <Route path="/signup" component={SignUpPage} />
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
        <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
        <Route path="/movies/:id" component={MoviePage} />
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
        </Switch>        
        </MoviesContextProvider>
        </MovieProvider1>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
