import * as types from "./actionType";
import axios from "axios";

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});


export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});


export const loadArticleStart = (users) => ({
    type: types.LOAD_ARTICLE_START,
  });