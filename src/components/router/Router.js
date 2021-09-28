import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../../App";
import Login from "../login/Login";
import Movies from "../views/allmovies/AllMovies";
import Register from "../register/Register";
import AllMovies from "../views/allmovies/AllMovies";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
