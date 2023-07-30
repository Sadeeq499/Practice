import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_SUCCESS } from "../Redux/actionType";
import axios from "axios";

const getUser = () => {
  return axios.get("https://dummyjson.com/users").then((res) => res.data);
};

function* workGetUser() {
  try {
    const users = yield call(getUser);
    yield put({ type: FETCH_USER_SUCCESS, users });
  } catch (error) {
    console.log(error);
  }
}

const rootSaga = function* () {
  yield takeEvery(FETCH_USER, workGetUser);
};
export default rootSaga;
