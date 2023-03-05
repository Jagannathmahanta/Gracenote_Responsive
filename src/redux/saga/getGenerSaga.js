import { GET_GENERS_FAILED, GET_GENERS_REQUEST, GET_GENERS_SUCCESS } from "../action/constant";
import { apiKey,baseApi } from "./baseApi";
import { call, put, takeEvery } from 'redux-saga/effects';

function getGener() {
  return fetch(`${baseApi}/programs/genres?api_key=${apiKey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function* getGenerRequest( ) {
  try {
    const Gener = yield call(getGener);
    yield put({ type: GET_GENERS_SUCCESS, Gener });
  } catch (e) {
    yield put({ type: GET_GENERS_FAILED });
  }
}
function* getGenerSaga() {
  yield takeEvery(GET_GENERS_REQUEST, getGenerRequest)

}

export default getGenerSaga;