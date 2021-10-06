import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import axios from "axios";
import { connect } from "react-redux";
import { setMovies } from "./actions/actions";

import "./scss/styles.scss";

class App extends React.Component {
  state = {
    userData: {},
    //movies: [],
    genres: [],
    directors: [],
    actors: [],
  };

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
    this.setState({ userData: {} });
    window.open("/login", "_self");
  }

  getUserInfo(username, token) {
    axios
      .get(`https://notflixapi.herokuapp.com/users/${username}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        this.setState({
          userData: res.data,
        });
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
        // this.setState({
        //   movies: res.data,
        // });
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
    let { movies } = this.props;
    let { userData } = this.state;

    return (
      <div className="app">
        <Header
          userData={userData}
          onLogin={(user) => this.onLogin(user)}
          onLogout={() => this.onLogout()}
        />
        <Main
          movies={movies}
          userData={userData}
          onLogin={(user) => this.onLogin(user)}
        />
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, { setMovies })(App);
