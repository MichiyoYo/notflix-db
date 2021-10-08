import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import AllMovies from "../views/all-movies/AllMovies";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/not-found/NotFound";
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
import AccessDenied from "../access-denied/AccessDenied";

const Router = (props) => {
  const loggedIn = localStorage.getItem("user") !== null;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          {loggedIn ? (
            <Redirect to="/user" />
          ) : (
            <Login user={props.userData.Username} onLogin={props.onLogin} />
          )}
        </Route>
        <Route exact path="/register">
          {loggedIn ? <Redirect to="/user" /> : <Register />}
        </Route>
        <Route exact path="/movies">
          {loggedIn ? <AllMovies movies={props.movies} /> : <AccessDenied />}
        </Route>
        <Route
          path="/movies/:movieId"
          render={({ match }) => {
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
          {loggedIn ? <AllGenres genres={props.genres} /> : <AccessDenied />}
        </Route>
        <Route
          path="/genres/:genreName"
          render={({ match }) => {
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
          {loggedIn ? (
            <AllDirectors directors={props.directors} />
          ) : (
            <AccessDenied />
          )}
        </Route>
        <Route
          path="/directors/:directorName"
          render={({ match }) => {
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
          {loggedIn ? <AllActors actors={props.actors} /> : <AccessDenied />}
        </Route>
        <Route
          path="/actors/:actorName"
          render={({ match }) => {
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
          {loggedIn ? (
            <UserProfile userData={props.userData} movies={props.movies} />
          ) : (
            <AccessDenied />
          )}
        </Route>
        <Route exact path="/user/edit">
          {loggedIn ? <UserEdit userData={props.userData} /> : <AccessDenied />}
        </Route>
        <Route exact path="/user/favorites">
          {loggedIn ? (
            <Favorites userData={props.userData} movies={props.movies} />
          ) : (
            <AccessDenied />
          )}
        </Route>
        <Route exact path="/user/watchlist">
          {loggedIn ? (
            <Watchlist userData={props.userData} movies={props.movies} />
          ) : (
            <AccessDenied />
          )}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
