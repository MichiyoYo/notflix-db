import { combineReducers } from "redux";
import {
  SET_MOVIES,
  SET_GENRES,
  SET_DIRECTORS,
  SET_ACTORS,
  SET_FILTER,
} from "../actions/actions";

function visibilityFilter(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function genres(state = [], action) {
  switch (action.type) {
    case SET_GENRES:
      return action.value;
    default:
      return state;
  }
}

function actors(state = [], action) {
  switch (action.type) {
    case SET_ACTORS:
      return action.value;
    default:
      return state;
  }
}

function directors(state = [], action) {
  switch (action.type) {
    case SET_DIRECTORS:
      return action.value;
    default:
      return state;
  }
}

export const moviesApp = combineReducers({
  visibilityFilter,
  movies,
  genres,
  actors,
  directors,
});
