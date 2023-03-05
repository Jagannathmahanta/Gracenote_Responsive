import { GET_CELIBRITY_FAILED, GET_CELIBRITY_REQUEST, GET_CELIBRITY_SUCCESS } from "../action/constant";
import { apiKey,baseApi } from "./baseApi";
import { call, put, takeEvery } from 'redux-saga/effects';

function getCelibrity(payload) {
    console.log(payload)
  return fetch(`${baseApi}/celebs/${payload}?imageSize=Lg&api_key=${apiKey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function* getCelibrityRequest({payload}) {
  try {
    const Celibrity = yield call(getCelibrity,payload);
    yield put({ type: GET_CELIBRITY_SUCCESS, Celibrity });
  } catch (e) {
    yield put({ type: GET_CELIBRITY_FAILED });
  }
}
function* getCelibritySaga() {
  yield takeEvery(GET_CELIBRITY_REQUEST, getCelibrityRequest)

}

export default getCelibritySaga;