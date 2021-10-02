import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import AllMovies from "../views/all-movies/AllMovies";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/not-found/NotFound";
import About from "../../pages/about/About";
import Movie from "../views/movie/Movie";
import Genre from "../views/genre/Genre";
import AllGenres from "../views/all-genres/AllGenres";
import AllDirectors from "../views/all-directors/AllDirectors";
import Director from "../views/director/Director";
import AllActors from "../views/all-actors/AllActors";
import Actor from "../views/actor/Actor";
import UserProfile from "../views/user/user-profile/UserProfile";
import UserEdit from "../views/user/user-edit/UserEdit";
import Favorites from "../views/user/favorites/Favorites";
import Watchlist from "../views/user/watchlist/Watchlist";

const Router = (props) => {
  const loggedIn = props.user !== null;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          <Login user={props.user} onLogin={props.onLogin} />
        </Route>
        <Route exact path="/register">
          {loggedIn ? <UserProfile /> : <Register />}
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/movies">
          <AllMovies movies={props.movies} />
        </Route>
        <Route
          path="/movies/:movieId"
          render={({ match, history }) => {
            return (
              <Movie
                movieData={props.movies.find(
                  (movie) => movie._id === match.params.movieId
                )}
              />
            );
          }}
        ></Route>

        <Route exact path="/genres">
          <AllGenres genres={props.genres} />
        </Route>
        <Route
          path="/genres/:genreName"
          render={({ match, history }) => {
            return (
              <Genre
                genreData={props.genres.find(
                  (genre) => genre.Name === match.params.genreName
                )}
                movies={props.movies.filter(
                  (movie) => movie.Genre.Name === match.params.genreName
                )}
              />
            );
          }}
        />
        <Route exact path="/directors">
          <AllDirectors directors={props.directors} />
        </Route>
        <Route
          path="/directors/:directorName"
          render={({ match, history }) => {
            return (
              <Director
                directorData={props.directors.find(
                  (director) => director.Name === match.params.directorName
                )}
                movies={props.movies.filter(
                  (movie) => movie.Director.Name === match.params.directorName
                )}
              />
            );
          }}
        />
        <Route exact path="/actors">
          <AllActors actors={props.actors} />
        </Route>
        <Route
          path="/actors/:actorName"
          render={({ match, history }) => {
            return (
              <Actor
                actorData={props.actors.find(
                  (actor) => actor.Name === match.params.actorName
                )}
                movies={props.movies}
              />
            );
          }}
        />
        <Route exact path="/user">
          <UserProfile user={props.user} />
        </Route>
        <Route exact path="/user/edit" component={UserEdit} />
        <Route exact path="/user/favorites" component={Favorites} />
        <Route exact path="/user/watchlist" component={Watchlist} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
