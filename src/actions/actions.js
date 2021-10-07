//actions
export const SET_MOVIES = "SET_MOVIES";
export const SET_GENRES = "SET_GENRES";
export const SET_DIRECTORS = "SET_DIRECTORS";
export const SET_ACTORS = "SET_ACTORS";
export const SET_USERDATA = "SET_USERDATA";
export const UPDATE_USER = "UPDATE_USER";
export const ADD_TO_FAVS = "ADD_TO_FAVS";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
export const SET_FILTER = "SET_FILTER";

//action creators
export function setMovies(value) {
  return {
    type: SET_MOVIES,
    value,
  };
}

export function setGenres(value) {
  return {
    type: SET_GENRES,
    value,
  };
}

export function setDirectors(value) {
  return {
    type: SET_DIRECTORS,
    value,
  };
}

export function setActors(value) {
  return {
    type: SET_ACTORS,
    value,
  };
}

export function setFilter(value) {
  return {
    type: SET_FILTER,
    value,
  };
}

export function setUserData(value) {
  return {
    type: SET_USERDATA,
    value,
  };
}

export function updateUser(info) {
  return {
    type: UPDATE_USER,
    info,
  };
}

export function addToFavs(movieId) {
  return {
    type: ADD_TO_FAVS,
    movieId,
  };
}

export function addToWatchlist(movieId) {
  return {
    type: ADD_TO_WATCHLIST,
    movieId,
  };
}

export function removeFromFavs(movieId) {
  return {
    type: REMOVE_FROM_FAVS,
    movieId,
  };
}

export function removeFromWatchlist(movieId) {
  return {
    type: REMOVE_FROM_WATCHLIST,
    movieId,
  };
}
