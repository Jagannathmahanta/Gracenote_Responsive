import { GET_SERIES_FAILED, GET_SERIES_REQUEST, GET_SERIES_SUCCESS } from "../action/constant";
import { apiKey,baseApi } from "./baseApi";
import { call, put, takeEvery } from 'redux-saga/effects';

function getSeries() {
  return fetch(`http://data.tmsapi.com/v1.1/programs/newShowAirings?lineupId=USA-TX42500-X&startDateTime=2023-02-28T16%3A30Z&imageSize=Lg&imageText=true&api_key=sutnr87xw6e5duru7eytcxwd`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function* getSeriesRequest( ) {
  try {
    const Series = yield call(getSeries);
    yield put({ type: GET_SERIES_SUCCESS, Series });
  } catch (e) {
    yield put({ type: GET_SERIES_FAILED });
  }
}
function* getSeriesSaga() {
  yield takeEvery(GET_SERIES_REQUEST, getSeriesRequest)

}

export default getSeriesSaga;