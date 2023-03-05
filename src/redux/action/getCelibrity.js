import { GET_CELIBRITY_REQUEST} from "./constant";

export const getCelibrityById=(payload)=>{
    console.log("AT Action",payload)
    return{
        type:GET_CELIBRITY_REQUEST,
        payload
    }
}