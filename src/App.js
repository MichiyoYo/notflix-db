import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import axios from "axios";

import "./scss/styles.scss";

export const UserContext = React.createContext();
export const movieContext = React.createContext();

export class App extends React.Component {
  state = {
    user: null,
    movies: [],
    genres: [],
    directors: [],
    actors: [],
  };

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
      this.getDirectors(accessToken);
      this.getGenres(accessToken);
      this.getActors(accessToken);
    }
  }

  onLogin(authData) {
    this.setState({
      user: authData.user.Username,
    });
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
  }

  onLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({ user: null });
    window.open("/login", "_self");
  }

  getMovies(token) {
    axios
      .get("https://notflixapi.herokuapp.com/catalog/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getDirectors(token) {
    axios
      .get("https://notflixapi.herokuapp.com/catalog/directors", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          directors: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getGenres(token) {
    axios
      .get("https://notflixapi.herokuapp.com/catalog/genres", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          genres: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getActors(token) {
    axios
      .get("https://notflixapi.herokuapp.com/catalog/actors", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          actors: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="app">
        <Header
          user={this.state.user}
          onLogin={(user) => this.onLogin(user)}
          onLogout={() => this.onLogout()}
        />
        <Main
          movies={this.state.movies}
          user={this.state.user}
          onLogin={(user) => this.onLogin(user)}
        />
        <Footer />
      </div>
    );
  }
}
