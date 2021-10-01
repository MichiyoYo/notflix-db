import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          <Login user={props.user} onLogin={props.onLogin} />
        </Route>
        <Route exact path="/register" component={Register} />
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
                onBackClick={() => history.goBack()}
              />
            );
          }}
        ></Route>

        <Route exact path="/genres" component={AllGenres} />
        <Route path="/genres/:genreName" component={Genre} />
        <Route exact path="/directors">
          <AllDirectors directors={props.directors} />
        </Route>
        <Route path="/directors/:directorName" component={Director} />
        <Route exact path="/actors" component={AllActors} />
        <Route path="/actors/:actorId" component={Actor} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/user/edit" component={UserEdit} />
        <Route exact path="/user/favorites" component={Favorites} />
        <Route exact path="/user/watchlist" component={Watchlist} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
