
import {  GET_SPORTS_FAILED,GET_SPORTS_SUCCESS, GET_SPORTDETAILS_SUCCESS,GET_SPORTDETAILS_FAILED} from "../action/constant";

 export const getSportsData =(state ={sportsListData:[]}, action)=>{
   
        switch (action.type) {
            case GET_SPORTS_SUCCESS:
                console.log("Spors Data",action.sportsListData)
                return { 
                    ...state,
                    sportsData: action.sportsListData}
            case GET_SPORTS_FAILED:
                return []
            default:
                return state
        }
    }

    export  const getSportDetailsData =(state ={sportDetails:[]}, action)=>{
   
        switch (action.type) {
            case GET_SPORTDETAILS_SUCCESS:
                console.log("Sport Details Reducer",action.details)
                return { 
                    ...state,
                    eachsportDetails: action.details}
            case GET_SPORTDETAILS_FAILED:
                return []
            default:
                console.log("HeyThere-Sport");
                return state
        }
    }
    
   