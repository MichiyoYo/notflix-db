import axios from "axios";

export function addToFavorites(user, token, movieId) {
  let promise = axios
    .post(
      `https://notflixapi.herokuapp.com/users/${user}/favorites/${movieId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  return promise;
}

export function addToWatchlist(user, token, movieId) {
  let promise = axios
    .post(
      `https://notflixapi.herokuapp.com/users/${user}/watchlist/${movieId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  return promise;
}

export function removeFromFavorites(user, token, movieId) {
  let promise = axios
    .delete(
      `https://notflixapi.herokuapp.com/users/${user}/favorites/${movieId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  return promise;
}

export function removeFromWatchlist(user, token, movieId) {
  let promise = axios
    .delete(
      `https://notflixapi.herokuapp.com/users/${user}/watchlist/${movieId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  return promise;
}
