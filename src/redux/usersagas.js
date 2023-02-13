import {
    takeLatest,
    put,
    call,
    fork,
    all,
    take,
    delay,
  } from "redux-saga/effects";
  import {
    loadUsersSuccess,
    loadUsersError,
  } from "./action";
  import {
    loadUsersApi,
    loadArticleApi,
  } from "./api";
  
  import * as types from "./actionType";
  
  export function* onLoadUsersStartAsync() {
    try {
      const response = yield call(loadUsersApi);
      console.log(response);
      if (response.status === 200) {
        // yield delay(500);
        yield put(loadUsersSuccess(response.data.response.docs));
      }
    } catch (error) {
      yield put(loadUsersError(error));
    }
  }
  
  /*function* deleteUser(userId) {
    try {
      const response = yield call(deleteUserApi, userId);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteUserSuccess(userId));
      }
    } catch (error) {
      yield put(deleteUserError(error));
    }
  }
  
  function* onDeleteUserRequest() {
    while (true) {
      const { payload: id } = yield take(types.DELETE_USER_START);
      yield call(deleteUser, id);
    }
  } */
  export function* loadArticleStartAsync() {
    try {
       // console.log("loadArticleApi", loadArticleApi, payload);
      //  const { payload: category } = yield take(types.LOAD_ARTICLE_START);
        // console.log("loadArticleApi", category);
       // const { payload: id } = yield take(types.DELETE_USER_START);
      const response = yield call(loadArticleApi);
      console.log(response);
      if (response.status === 200) {
        // yield delay(500);
        yield put(loadUsersSuccess(response.data.response.docs));
      }
    } catch (error) {
      yield put(loadUsersError(error));
    }
  }
  
 
  export function* onLoadUsers() {
    yield takeLatest(types.LOAD_USERS_START, onLoadUsersStartAsync);
  }
  export function* onLoadArticle() {
    yield takeLatest(types.LOAD_ARTICLE_START, loadArticleStartAsync);
  }
  
  
  const userSagas = [
    fork(onLoadUsers),
    fork(onLoadArticle),
  ];
  
  export default function* rootSaga() {
    yield all([...userSagas]);
  }
  