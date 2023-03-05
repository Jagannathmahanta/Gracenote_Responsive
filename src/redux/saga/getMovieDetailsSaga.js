// import { GET_MOVIEDETAILS_FAILED, GET_MOVIEDETAILS_REQUEST, GET_SPORTS_FAILED,
//     GET_SPORTS_REQUEST,
//     GET_SPORTS_SUCCESS
    
//     } from "../action/constant";
//     import {call, put, takeEvery} from 'redux-saga/effects';
    


// function fetchDetails(payload) {
//     return fetch(`https://data.tmsapi.com/v1.1/programs/${payload}?imageSize=Sm&api_key=sutnr87xw6e5duru7eytcxwd`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//     })
//       .then((response) => response.json())
//       .catch((e) => console.log(e));
//   }
  

// function * getDetails(){
//   try{
//     const details=yield call(fetchDetails);
//     yield put({type:GET_SPORTS_SUCCESS,details});
//   } catch(e){
//     yield put({type:GET_MOVIEDETAILS_FAILED})
//   }
// }

//   function* getSportsSaga(){
  
//     yield takeEvery(GET_MOVIEDETAILS_REQUEST,getDetails)  
// }

// export default getSportsSaga;