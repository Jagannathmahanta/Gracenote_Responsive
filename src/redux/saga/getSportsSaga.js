import { GET_SPORTS_FAILED,GET_SPORTS_REQUEST,GET_SPORTS_SUCCESS,GET_SPORTDETAILS_FAILED,GET_SPORTDETAILS_SUCCESS,GET_SPORTDETAILS_REQUEST} from "../action/constant";
 import {call, put, takeEvery} from 'redux-saga/effects';
 import { apiKey ,baseApi} from "./baseApi";


function fetchSportsList() {
  return fetch(`${baseApi}/sports/58,59,88/events/airings?lineupId=USA-TX42500-X&startDateTime=2023-02-28T04%3A00Z&api_key=${apiKey}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function* getSportsRequest() {
  try {
    const sportsListData = yield call(fetchSportsList);
    yield put({ type: GET_SPORTS_SUCCESS, sportsListData });
  } catch (e) {
    yield put({ type: GET_SPORTS_FAILED});
  }
}

function fetchDetails(payload) {
  return fetch(`https://data.tmsapi.com/v1.1/programs/${payload}?imageSize=Sm&api_key=sutnr87xw6e5duru7eytcxwd`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .catch((e) => console.log(e));
}

function* getSportDetails(action){
  try{
    console.log("getSportDetails - action : " , action);
    const details=yield call(fetchDetails,action?.payload);
    yield put({type:GET_SPORTDETAILS_SUCCESS,details});
  } catch(e){
    yield put({type:GET_SPORTDETAILS_FAILED})
  }
}

function* getSportsSaga(){
  yield takeEvery(GET_SPORTS_REQUEST,getSportsRequest) 
  yield takeEvery(GET_SPORTDETAILS_REQUEST, getSportDetails)  
}

export default getSportsSaga;
