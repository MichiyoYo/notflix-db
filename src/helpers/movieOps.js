/**
 * These functions are helpers to facilitate the addition and remotion of movies from
 * list of favorite movies and list of movies the user wants to watch
 */

import axios from "axios";

/**
 * The function addToFavorites sends a post request to the API server to add a movie to the list of favorites of the user
 * @param {*} user the user to be updated
 * @param {*} token the authentication token to execute the operation
 * @param {*} movieId the ID of the movie to be added
 * @returns a promise that holds the answer from the server
 */
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

/**
 * The function addToWatchlist sends a post request to the API server to add a movie to the watchlist of the user
 * @param {*} user the user to be updated
 * @param {*} token the authentication token to execute the operation
 * @param {*} movieId the ID of the movie to be added
 * @returns a promise that holds the answer from the server
 */
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

/**
 * The function removeFromFavorites sends a delete request to the API server to remove a movie from the list of favorites of the user
 * @param {*} user the user to be updated
 * @param {*} token the authentication token to execute the operation
 * @param {*} movieId the ID of the movie to be removed
 * @returns a promise that holds the answer from the server
 */
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

/**
 * The function removeFromWatchlist sends a delete request to the API server to remove a movie from the watchlist of the user
 * @param {*} user the user to be updated
 * @param {*} token the authentication token to execute the operation
 * @param {*} movieId the ID of the movie to be removed
 * @returns a promise that holds the answer from the server
 */
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
