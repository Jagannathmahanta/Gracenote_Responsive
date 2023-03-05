import { GET_CELIBRITY_FAILED, GET_CELIBRITY_SUCCESS } from "../action/constant";

const getCelibratyData =(state ={CelibratyData:[]}, action)=>{
   
        switch (action.type) {
            case GET_CELIBRITY_SUCCESS:
                console.log("Sports Data at Reducer",action.Celibrity)
                return { 
                    ...state,
                    CelibratyData: action.Celibrity}
            case GET_CELIBRITY_FAILED:
                return []
            default:
                return state
        }
    }
export default getCelibratyData;