import { GET_SERIES_SUCCESS, GET_SERIES_FAILED } from "../action/constant";

const getSeriesData =(state ={SeriesData:[]}, action)=>{
   
        switch (action.type) {
            case GET_SERIES_SUCCESS:
                console.log("Geners Data at Reducer",action.Series)
                return { 
                    ...state,
                    SeriesData: action.Series}
            case GET_SERIES_FAILED:
                return []
            default:
                return state
        }
    }
export default getSeriesData;