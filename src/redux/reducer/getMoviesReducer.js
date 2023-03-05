import {GET_MOVIEDETAILS_FAILED, GET_MOVIEDETAILS_SUCCESS, GET_MOVIES_FAILED, GET_MOVIES_SUCCESS } from "../action/constant";

const getMoviesData =(state ={moviesListData:[]}, action)=>{
   
        switch (action.type) {
            case GET_MOVIES_SUCCESS:
                console.log("Sports Data at Reducer",action.moviesData)
                return { 
                    ...state,
                    moviesData: action.moviesData}
            case GET_MOVIES_FAILED:
                return []
            default:
                return state
        }
    }
export default getMoviesData;
    
export  const movieData =(state ={movieDetails:[]}, action)=>{
   
    switch (action.type) {
        case GET_MOVIEDETAILS_SUCCESS:
            console.log("Movie Details Reducer",action.details)
            return { 
                ...state,
                eachMovieData: action.details}
        case GET_MOVIEDETAILS_FAILED:
            return []
        default:
            return state
    }
}
