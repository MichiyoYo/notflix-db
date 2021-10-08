import { combineReducers } from "redux";
import {
  SET_MOVIES,
  SET_GENRES,
  SET_DIRECTORS,
  SET_ACTORS,
  SET_FILTER,
  SET_USERDATA,
  UPDATE_USER,
} from "../actions/actions";

var _ = require("lodash");

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

function userData(state = [], action) {
  switch (action.type) {
    case SET_USERDATA:
      return action.value;
    case UPDATE_USER:
      let updatedUser = { ...state };
      _.extend(updatedUser, action.info);
      return updatedUser;
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
  userData,
});
