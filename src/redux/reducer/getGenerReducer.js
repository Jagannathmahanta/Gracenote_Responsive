import { GET_GENERS_FAILED, GET_GENERS_SUCCESS } from "../action/constant";

const getGenersData =(state ={GenersData:[]}, action)=>{
   
        switch (action.type) {
            case GET_GENERS_SUCCESS:
                console.log("Geners Data at Reducer",action.Gener)
                return { 
                    ...state,
                    GenersData: action.Gener}
            case GET_GENERS_FAILED:
                return []
            default:
                return state
        }
    }
export default getGenersData;