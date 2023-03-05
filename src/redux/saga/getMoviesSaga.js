
import { GET_MOVIEDETAILS_FAILED, GET_MOVIEDETAILS_REQUEST, GET_MOVIEDETAILS_SUCCESS,
   GET_MOVIES_FAILED, GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS 
  } from "../action/constant";
   import {call, put, takeEvery} from 'redux-saga/effects';
   import { apiKey ,baseApi} from "./baseApi";
  
  function fetchMoviesList() {
    
      return fetch(`http://data.tmsapi.com/v1.1/movies/showings?startDate=2023-03-05&zip=78701&api_key=sutnr87xw6e5duru7eytcxwd`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((response) => response.json())
        .catch((e) => console.log(e));
    }
    
    function* getMoviesRequest() {
      try {
        const moviesData = yield call(fetchMoviesList);
        yield put({ type: GET_MOVIES_SUCCESS, moviesData });
      } catch (e) {
        yield put({ type: GET_MOVIES_FAILED});
      }
    }
  
    function fetchDetails(payload) {
      console.log("PAYLOAD AT SAGA",payload);
      return fetch(`${baseApi}/programs/${payload}?imageSize=Sm&api_key=${apiKey}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((response) => response.json())
        .catch((e) => console.log(e));
    }
    
  
  function * getDetails({payload}){
    try{
      const details=yield call(fetchDetails,payload);
      yield put({type:GET_MOVIEDETAILS_SUCCESS,details});
      console.log("Doleep",details);
    } catch(e){
      yield put({type:GET_MOVIEDETAILS_FAILED})
    }
  }
  
    function* getMoviesSaga(){
      yield takeEvery(GET_MOVIES_REQUEST,getMoviesRequest)
      yield takeEvery(GET_MOVIEDETAILS_REQUEST,getDetails)  
  }
  
  export default getMoviesSaga;