import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import axios from "axios";
import { connect } from "react-redux";
import {
  setMovies,
  setActors,
  setGenres,
  setDirectors,
  setUserData,
} from "./actions/actions";

import "./scss/styles.scss";

class App extends React.Component {
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.getMovies(accessToken);
      this.getDirectors(accessToken);
      this.getGenres(accessToken);
      this.getActors(accessToken);
      this.getUserInfo(localStorage.getItem("user"), accessToken);
    }
  }

  onLogin(authData) {
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
  }

  onLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    //this.setState({ userData: {} });
    window.open("/login", "_self");
  }

  getUserInfo(username, token) {
    axios
      .get(`https://notflixapi.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.props.setUserData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getMovies(token) {
    axios
      .get("https://notflixapi.herokuapp.com/catalog/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.props.setMovies(res.data);
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
        this.props.setDirectors(res.data);
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
        this.props.setGenres(res.data);
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
        this.props.setActors(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    let { userData } = this.props;

    return (
      <div className="app">
        <Header
          userData={userData}
          onLogin={(user) => this.onLogin(user)}
          onLogout={() => this.onLogout()}
        />
        <Main
          {...this.props}
          userData={userData}
          onLogin={(user) => this.onLogin(user)}
        />
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    directors: state.directors,
    actors: state.actors,
    userData: state.userData,
  };
};

export default connect(mapStateToProps, {
  setMovies,
  setGenres,
  setDirectors,
  setActors,
  setUserData,
})(App);
